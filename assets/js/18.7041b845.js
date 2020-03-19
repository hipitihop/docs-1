(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{277:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("link",{attrs:{rel:"stylesheet",href:"/css/speechbubbles.css"}}),e._v(" "),a("h1",{attrs:{id:"introduction-to-skill-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-skill-development"}},[e._v("#")]),e._v(" Introduction to Skill Development")]),e._v(" "),a("p",[e._v("Alice Skills are the voice applications that provide different functionality for users. To create a Skill requires at least basic technical experience, a Alice installation, and an idea of what your Skill will do, and how people will use it.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Explore the fundamental building blocks of a Skill, and the knowledge required\nto create meaningful and engaging voice interactions.")])]),e._v(" "),a("h2",{attrs:{id:"technical-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-requirements"}},[e._v("#")]),e._v(" Technical Requirements")]),e._v(" "),a("h3",{attrs:{id:"python-programming-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-programming-language"}},[e._v("#")]),e._v(" Python programming language")]),e._v(" "),a("p",[e._v("Skills for Alice are written using the "),a("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python programming language"),a("OutboundLink")],1),e._v(". A simple Skill can be a great way for new developers to try Python out in a real project, whilst experienced programmers will quickly see the powerful possibilities available in a well crafted Skill.")]),e._v(" "),a("p",[e._v("If you aren't familiar with the basics of Python, check out our "),a("a",{attrs:{href:"python-resources"}},[e._v("list of Python tutorials and resources")]),e._v(" to get you started. If you've programmed in other object-oriented languages, like Javascript or C#, then you'll be able to pick it up, but if you're totally new to programming, you might want to look at an "),a("a",{attrs:{href:"https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("introductory programming course"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"github-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-account"}},[e._v("#")]),e._v(" Github account")]),e._v(" "),a("p",[e._v("Skills are hosted on "),a("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(", so you will need to create an account there if you don't already have one. It is good to have an basic understanding of the "),a("a",{attrs:{href:"https://git-scm.com/video/get-going",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git basics"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://guides.github.com/activities/hello-world/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub basics"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"running-alice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-alice"}},[e._v("#")]),e._v(" Running Alice")]),e._v(" "),a("p",[e._v("To test your Skill out, you will need to "),a("a",{attrs:{href:"../set-up"}},[e._v("set up a Alice device")]),e._v(". Currently Alice can be installed on devices running debian stretch/buster. Alice also comes with a number of helpful tools to create new Skills, and validate them. If you aren't yet familiar with how Alice works, check out the "),a("a",{attrs:{href:""}},[e._v("overview of Alice components")]),e._v(" to understand the many technologies that come together to provide an intelligent voice assistant.")]),e._v(" "),a("h2",{attrs:{id:"what-makes-a-good-skill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-makes-a-good-skill"}},[e._v("#")]),e._v(" What makes a good Skill?")]),e._v(" "),a("h3",{attrs:{id:"fulfilling-a-need-the-user-has"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fulfilling-a-need-the-user-has"}},[e._v("#")]),e._v(" Fulfilling a need the user has")]),e._v(" "),a("p",[e._v("Good Skills meet one or more of the user's needs. Popular Skills are popular because people use them frequently - for instance, to set alarms, reminders, or to identify the time in other time zones. On the other hand, a Skill that, say, recites π to 100 digits might be pretty cool, but when was the last time you needed to know π to 100 digits? Contrast that with the last time you set a reminder on your phone.")]),e._v(" "),a("h3",{attrs:{id:"having-an-easy-to-use-voice-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#having-an-easy-to-use-voice-interface"}},[e._v("#")]),e._v(" Having an easy to use voice interface")]),e._v(" "),a("p",[e._v("Just like a web page with a thoughtfully-designed interface is much more pleasant to use, a Skill with a well designed voice interface is a delight, not a chore, to use. You should anticipate the task the user is trying to accomplish, and how to make that as straightforward as possible.")]),e._v(" "),a("p",[e._v("If you have an idea for a Skill, it's a great idea to join our "),a("a",{attrs:{href:"https://discordapp.com/invite/Jfcj355",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Chat"),a("OutboundLink")],1),e._v(", specifically the "),a("code",[e._v("skills")]),e._v(" channel, and share what your plans are. You'll be able to get constructive and helpful feedback on your Skill from an experienced community.")]),e._v(" "),a("h2",{attrs:{id:"skill-terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skill-terminology"}},[e._v("#")]),e._v(" Skill terminology")]),e._v(" "),a("p",[e._v("You'll notice some new terms as you start to develop Skills.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("utterance")]),e._v(" - An utterance is a phrase spoken by the User, after the User says the Wake Word.")]),e._v(" "),a("li",[a("strong",[e._v("intent")]),e._v(" - An intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots.")]),e._v(" "),a("li",[a("strong",[e._v("slot")]),e._v(" - A slot is an argument to an intent that gives a voice assistant more information about that request.")])]),e._v(" "),a("p",[e._v("Consider a weather skill. It might have e.g. an intent "),a("code",[e._v("GetWeather")]),e._v(" with the following utterances (slots are marked in red):\n")]),a("div",{staticClass:"userSpeech male"},[e._v("what's the weather like in "),a("strong",{staticClass:"slotWord"},[e._v("Toronto")]),e._v("?")]),e._v(" "),a("div",{staticClass:"userSpeech male"},[e._v("Tell me the weather in "),a("strong",{staticClass:"slotWord"},[e._v("Toronto")]),e._v(" please?")]),a("p"),e._v(" "),a("p",[e._v("If you encounter anything else you're not familiar with, checkout the "),a("a",{attrs:{href:"../glossary"}},[e._v("Alice Glossary")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);