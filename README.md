# nowabeer.com


### why?
Well, i like beer!

### how is it working?
Simple HTML and Javascript.
Who decides when to drink a beer? `weights.json` is a first draft with weekdays and hours.
Everything >= 0.5 is a yes, cheers ;)
Like I said, a first draft is a first draft.


### what are the tools?
* MaterializeCSS + JS
* JQuery
* my fingers, my head and my passion for beer

### how can you help?
Help me with translating the app in your language or adding more answers in your language. 
Its easy and it would be really cool.

There is a folder called `locale` and there are the language files.
It´s simple json:
```
{
    "Header" : "Can you drink beer now?",
    "Answers" : {
        "true" : ["Yes, sure", "Let´s go!", "You´re late, fire!"],
        "false" : ["Nope!", "Unfortunately not.", "Keep calm, your time is coming!"]
    },
    "Button" : "Check again"
}
```
Just replace the values with values from your local language from your browser and create a pull request. Name the file like your language code and .json
Example: `de-DE.json`

*And please use your local slang ;)*

The app will load your language file if available automaticly. Magic ;)
You can find your country code here: https://gist.github.com/wpsmith/7604842

Great! Thanks for having me and enjoy your beer ;)