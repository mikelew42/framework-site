import app, { h1, h2, p, strong, kbd, code, samp, pre, article, header, footer, a, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Code"));
    div(() => {
        p(() => { strong("Keyboard input: "); kbd("Cmd"); });
        p(() => { strong("Inline code: "); code("<div>code</div>"); });
        p(() => { strong("Sample output: "); samp("This is sample output from a computer program."); });
        
        h2("Pre-formatted text");
        pre(`P R E F O R M A T T E D T E X T
  ! " # $ % & ' ( ) * + , - . /
  0 1 2 3 4 5 6 7 8 9 : ; < = > ?
  @ A B C D E F G H I J K L M N O
  P Q R S T U V W X Y Z [ \\ ] ^ _
  \` a b c d e f g h i j k l m n o
  p q r s t u v w x y z { | } ~
  ~ 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ `);

        pre(() => code("<h2>Pre-formatted text</h2>"));
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
