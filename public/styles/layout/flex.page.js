import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

// app.$root.ac("page");

style(`
    label { user-select: none; }`);

h1("Flex");

rewidth.c("mb", () => {
    h3(".flex 2x2");
    div.c("flex auto viz all-pad dark", () => {
        div.c("flex auto all-pad", () => {
            div("One");
            div("Two");
        });
        div.c("flex auto all-pad", () => {
            div("Three");
            div("Four");
        });
    }).style("--column", "10em");
});

rewidth.c("mb", re => {
    let cont;
    h3(".flex.three");
    // div.c("dark", () => {
        cont = div.c("flex three dark all-pad viz", d => {
            style(`.card { }
                .card > * { margin: 0; }`);
            div.c("card", () => {
                h4("Card");
                p("This is a card.");
            });
            div.c("card", () => {
                h4("Card");
                p("This is a card.");
            });
            div.c("card", () => {
                h4("Card");
                p("This is a card.");
            });
            // div.c("card", () => {
            //     h4("Card");
            //     p("This is a card.");
            // });
        }).style("--column", "14em").ctrl("flex three dark all-pad viz");
    // })
    

    p("This is called the Albatross method?  It uses a clever calculation to go from 3 columns directly to 1 column.  This would work for 4 columns, but that jump is less practical.");
});

rewidth.c("mb", re => {
    h3(".flex");
    div.c("flex gap dark pad wrap v-center zoom-responsive", () => {
        h4("This is the left side.").ac("mb-0");
        re.button = button.c("prim","Right").ac("ml-auto");
    }).style("min-height", "10em").ctrl("flex gap dark pad wrap v-center zoom-responsive viz");
    p("The button has `margin-left: auto`.", () => {
        re.button.ctrl("ml-auto")
        // if ctrl() is chainable, then the button gets appended unless we're careful...
    });
});

rewidth.c("mb", () => {
    h3(".flex.split");
    div.c("flex split dark pad wrap", () => {
        h4("This is the left side.");
        button.c("prim","Right");
    });
    p("The only issue with `.split`, is that the items will align left when stacked.")
});

section(() => {
    h3(".flex");
    code.edit(
`div.c("flex viz", () => {
    div.c("left", () => "left");
    div.c("right", () => "right");
});`)    

// code.edit(
// console.log(div.c("flex viz", () => {
//     div.c("left", () => "left");
//     div.c("right", () => "right");
// }).el.outerHTML);

});    

rewidth.c("mb", () => {
    h3(".flex.all-1");
    div.c("flex all-1 viz", () => {
        div.c("left", () => "left");
        div.c("right", () => "right");
    });
});

rewidth.c("mb", () => {
    h3(".flex.all-1.wrap");
    div.c("flex all-1 wrap viz", () => {
        div.c("left", () => "left").style("flex-basis", "10em");
        div.c("right", () => "right").style("flex-grow", "10").style("min-width", "10em");
    });
});

rewidth.c("mb", () => {
    h3(".flex.auto");
    div.c("flex auto viz", () => {
        div.c("left", () => "left");
        div.c("right", () => "right");
    });
});

rewidth.c("mb", () => {
    h3(".flex.wrap");
    div.c("flex wrap viz all-pad", () => {
        div("one");
        div("two");
        div("three");
        div("four");
        div("five");
        div("six");
        div("seven");
        div("eight");
        div("nine");
        div("ten");
    });
});
rewidth.c("mb", () => {
    h2("Big Orphan Problem");
    h3(".flex.auto --column: 5em");
    div.c("flex auto viz all-pad", () => {
        div("one");
        div("two");
        div("three");
        div("four");
        div("five");
        div("six");
        div("seven");
        div("eight");
        div("nine");
        div("ten");
    }).style("--column", "5em");
    p("It's hard to have an item go from a small brick to 100% width.")
}).style("margin-top", "3em");

rewidth.c("mb", () => {
    h2("Big Orphan Problem");
    h3(".flex.auto --column: 5em");
    style(`
        .sec32 {
            --column: 5em;
        }

        .sec32 > * {
            min-width: 5em;
            max-width: 15em;
        }
    `)
    div.c("flex auto viz all-pad sec32", () => {
        div("one");
        div("two");
        div("three");
        div("four");
        div("five");
        div("six");
        div("seven");
        div("eight");
        div("nine");
        div("ten");
    }).style("--column", "5em");
    p("It's hard to have an item go from a small brick to 100% width.")
}).style("margin-top", "3em");