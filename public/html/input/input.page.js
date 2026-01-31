import app, { legend, fieldset, p, label, input, button, img, article, footer, a, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Input fields");
        p(() => {
            label("Text Input").attr("for", "input__text");
            input().attr("id", "input__text").attr("type", "text").attr("placeholder", "Text Input");
        });
        p(() => {
            label("Password").attr("for", "input__password");
            input().attr("id", "input__password").attr("type", "password").attr("placeholder", "Type your Password");
        });
        p(() => {
            label("Web Address").attr("for", "input__webaddress");
            input().attr("id", "input__webaddress").attr("type", "url").attr("placeholder", "http://yoursite.com");
        });
        p(() => {
            label("Email Address").attr("for", "input__emailaddress");
            input().attr("id", "input__emailaddress").attr("type", "email").attr("placeholder", "name@email.com");
        });
        p(() => {
            label("Phone Number").attr("for", "input__phone");
            input().attr("id", "input__phone").attr("type", "tel").attr("placeholder", "(999) 999-9999");
        });
        p(() => {
            label("Search").attr("for", "input__search");
            input().attr("id", "input__search").attr("type", "search").attr("placeholder", "Enter Search Term");
        });
        p(() => {
            label("Number Input").attr("for", "input__text2");
            input().attr("id", "input__text2").attr("type", "number").attr("placeholder", "Enter a Number");
        });
        p(() => {
            label("Error").ac("error").attr("for", "input__text3");
            input().ac("error").attr("id", "input__text3").attr("type", "text").attr("placeholder", "Text Input");
        });
        p(() => {
            label("Valid").ac("success").attr("for", "input__text4");
            input().ac("success").attr("id", "input__text4").attr("type", "text").attr("placeholder", "Text Input");
        });
        p(() => {
            label("Disabled Text Input").attr("for", "input__text5");
            input().attr("id", "input__text5").attr("type", "text").attr("placeholder", "Disabled Text Input").attr("disabled", "");
        });
        p.c("grouped", () => {
            input().attr("type", "search").attr("id", "input__text6").attr("placeholder", "Search");
            button.c("button icon-only", () => {
                img().attr("src", "https://icongr.am/feather/search.svg?size=16");
            });
        });
        p.c("grouped", () => {
            input().attr("type", "text").attr("id", "input__text7").attr("placeholder", "Username");
            input().attr("type", "text").attr("id", "input__text8").attr("placeholder", "Password");
            button.c("button primary", "Submit");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
