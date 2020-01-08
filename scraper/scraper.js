const puppeteer = require("puppeteer");
const db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cookbookDB");

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://www.allrecipes.com");
    await page.setViewport({
        width: 1200,
        height: 800
    });

    await autoScroll(page);
    const recipes = await page.evaluate(() => {
        const anchors = Array.from(
            document.querySelectorAll("div.grid-card-image-container > a")
        );
        return anchors
            .map(anchor => anchor.href)
            .filter(recipe => !recipe.includes("video"));
    });

    for (const recipe of recipes) {
        try {
            await page.goto(recipe);
        } catch (err) {
            console.log(err);
        }

        const ingredientLines = await page.evaluate(() => {
            const recipeItems = Array.from(
                document.querySelectorAll("span.recipe-ingred_txt")
            );
            return recipeItems.map(anchor => anchor.textContent.trim());
        });
        ingredientLines.pop();
        try {
            const recipeName = await page.evaluate(() => {
                return document.getElementById("recipe-main-content")
                    .textContent;
            });
            const ingredientsArray = [];
            for (const ingredientLine of ingredientLines) {
                const splitArray = ingredientLine.split(" ");
                let ingredientAmount = 0;
                let ingredientUnit = "";
                let ingredientName = "";
                if (ingredientLine.includes("to taste")) {
                    ingredientUnit = "to taste";
                    ingredientName = splitArray[0];
                } else {
                    num = Number(splitArray[0]);
                    ingredientAmount = splitArray[0].includes("/")
                        ? parseInt(
                              splitArray[0].substring(
                                  0,
                                  splitArray[0].indexOf("/")
                              )
                          ) /
                          parseInt(
                              splitArray[0].substring(
                                  splitArray[0].indexOf("/") + 1
                              )
                          )
                        : isNaN(num)
                        ? null
                        : num;
                    ingredientUnit = ingredientLine.includes("(")
                        ? splitArray[1] +
                          " " +
                          splitArray[2] +
                          " " +
                          splitArray[3]
                        : splitArray[1];
                    ingredientName = ingredientLine.includes("(")
                        ? splitArray.slice(4).join(" ")
                        : splitArray.slice(2).join(" ");
                }
                ingredientsArray.push({
                    name: ingredientName,
                    amount: ingredientAmount,
                    unit: ingredientUnit
                });
            }
            db.Recipe.find({
                name: recipeName
            }).then(res => {
                if (res.length < 1) {
                    db.Recipe.create({
                        name: recipeName,
                        ingredients: ingredientsArray
                    })
                        .then(res => console.log("Adding recipe: " + res))
                        .catch(err => console.log(err));
                } else {
                    console.log("Duplicate recipe: " + res);
                }
            });
        } catch (err) {
            console.log(err);
            continue;
        }
    }

    await browser.close();
})();

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
