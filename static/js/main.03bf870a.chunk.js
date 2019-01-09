(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(8),o=n.n(r),i=n(1),c=n(2),u=n(4),l=n(3),h=n(5),p=(n(6),function(e){function t(){var e,n;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).showGuessResult=function(e,t){return e&&t>0?"THAT'S CORRECT!":!1===e&&t>0?"THAT'S INCORRECT!":void 0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.answer,s=t.count;return n||!1===n?(e=this.showGuessResult(n,s).includes("INCORRECT")?"incorrect":"correct",a.a.createElement("div",{className:"answer"},a.a.createElement("button",{onClick:this.props.nextQuestion,className:"next-question"},"Submit answer & show next Question"),a.a.createElement("p",{className:e},this.showGuessResult(n,s)))):null}}]),t}(s.Component)),m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).nextQuestion=function(){var e=n.state,t=e.question,s=e.answeredCorrectly;n.setState({showNextQuestion:!0,count:0,answeredCorrectly:null}),null!==t&&n.props.currentAnswer(t,s),n.showQuestion()},n.showQuestion=function(){var e=n.props.questions,t=n.getRandomNumber(e.length),s=n.findQuestion("keys",t),a=n.findQuestion("values",t);n.setState({question:{definition:a,answer:s}})},n.getRandomNumber=function(e){return Math.floor(Math.random()*e)},n.findQuestion=function(e,t){return Object[e](n.props.questions[t]).shift()},n.checkAnswer=function(e){var t,s=e.target.previousSibling.value,a=n.state.question.answer;t=!!(s.toLowerCase()===a.toLowerCase()),n.setState({count:n.state.count+1,answeredCorrectly:t}),e.target.previousSibling.value=""},n.showPrevResult=function(e){var t;return n.props.answeredQuestions.forEach(function(n){n.guess.definition===e&&(t=n.question)}),void 0===t?"undefined":t?"correct!":"incorrect..."},n.showBtnText=function(){return n.state.count>0?"Click to try again":"Click to check answer"},n.state={count:0,question:null,answeredCorrectly:null,showNextQuestion:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.state.showNextQuestion){var e,t,n=this.state.question.definition,s=this.state,r=s.count,o=s.answeredCorrectly;return e=this.showPrevResult(n).includes("incorrect")?"no":"yes",t=this.showPrevResult(n).includes("undefined")?"undefined":"show-previous",a.a.createElement("div",{className:"card"},a.a.createElement("p",{className:"num-guess"},"Number of guesses so far:",a.a.createElement("span",{className:"count"},"  ",r)),a.a.createElement("p",{className:"definition"},n),a.a.createElement("p",{className:t},"Previous result for this question was:",a.a.createElement("span",{className:e},this.showPrevResult(n))),a.a.createElement("input",{type:"text",className:"user-input",placeholder:"ENTER YOUR ANSWER HERE",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="ENTER YOUR ANSWER HERE"}}),a.a.createElement("button",{onClick:this.checkAnswer,className:"user-btn"},this.showBtnText()),a.a.createElement(p,{nextQuestion:this.nextQuestion,answer:o,count:r}))}return a.a.createElement("div",null,a.a.createElement("h4",{onClick:this.nextQuestion,className:"begin"},"Click to begin"),a.a.createElement("p",{className:"intro"},"Welcome to Study Time, a web-based flashcard app to practice how well you know your Javascript Array Prototypes!"))}}]),t}(s.Component),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={correctlyAnswered:null},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("section",{className:"display"},a.a.createElement(m,{questions:this.props.prototypes,currentAnswer:this.props.currentAnswer,answeredQuestions:this.props.answeredQuestions}))}}]),t}(s.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.theScore;return a.a.createElement("nav",{className:"nav"},a.a.createElement("ul",{className:"types"},a.a.createElement("li",{className:"aTypes"},"Practice Array Prototypes!")),a.a.createElement("ul",{className:"user"},a.a.createElement("li",null,"Total correct: ",e),a.a.createElement("li",{onClick:this.props.reset,className:"reset-btn"},"Reset your progress")))}}]),t}(s.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).componentDidMount=function(){fetch("http://memoize-datasets.herokuapp.com/api/v1/aTypes").then(function(e){return e.json()}).then(function(t){setTimeout(function(){e.setState({prototypes:t.aTypes,answeredQuestions:e.getFromStorage(),isLoading:!1})},200)}).catch(function(e){return console.error(e)})},e.getFromStorage=function(){return 0===localStorage.length?[]:JSON.parse(localStorage.getItem("data"))},e.updateAnsweredQuestions=function(t,n){var s=e.state.answeredQuestions;s.push({guess:t,question:n}),e.setState({answeredQuestions:s}),localStorage.setItem("data",JSON.stringify(s))},e.tallyScore=function(){var t=e.state.answeredQuestions;return 0===t.length?0:t.filter(function(e){return e.question}).length},e.reset=function(){e.setState({answeredQuestions:[]}),localStorage.removeItem("data")},e.state={prototypes:null,answeredQuestions:[],isLoading:!0},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.prototypes;if(e.isLoading)return a.a.createElement("div",null,"Loading");var n=this.state.answeredQuestions;return a.a.createElement("main",{className:"App"},a.a.createElement("h1",{className:"header"},"Welcome to Study Time"),a.a.createElement(w,{theScore:this.tallyScore(),reset:this.reset}),a.a.createElement(d,{prototypes:t,currentAnswer:this.updateAnsweredQuestions,answeredQuestions:n}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.03bf870a.chunk.js.map