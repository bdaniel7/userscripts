const targetNode = document.getElementById("voyager-feed");

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
  	//console.log(`mutation: ${mutation.type}`);
    if (mutation.type === "childList") {
    	
    	if (mutation.target.tagName == "DIV"){
    		if (mutation.target.classList.contains("ember-view")) {
    			//console.log(`${mutation.target.tagName}, ${mutation.target.innerText}`);
    			hideSpanWithText(mutation.target, "Suggested", "suggested");
    			hideSpanWithText(mutation.target, "Promoted", "promoted");
    		}
    	}
    	
      // if (mutation.target.tagName === "SPAN") {
      // 		if (mutation.target.innerText === "Promoted" ) {
		    //   	console.log(`${mutation.target.tagName}, ${mutation.target.innerText}`);
		    		
		    // 		let xoxo = mutation.target.closest("div.feed-shared-update-v2");
		    //   	//mutation.target.classList.add("promoted");
		    //   	if (xoxo != null) {
		    //   		xoxo.classList.add("promoted")
		    //   	}
		    //   	else {
		    //   		console.log("Promoted is null");
		    //   	}
    		// 	}
    			
    		// 	if (mutation.target.innerText === "Suggested" ) {
		    //   	//console.log(`${mutation.target.tagName}, ${mutation.target.innerText}`);
		    		
		    //   	let xoxo = mutation.target.closest("div.feed-shared-update-v2");
		    //   	if (xoxo != null) {
		    //   		xoxo.classList.add("suggested")
		    //   	}
		    //   	else {
		    //   		console.log("Suggested is null");
		    //   	}
    		// 	}
      // }
    } else if (mutation.type === "subtree") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

const config = { childList: true, subtree: true };

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

window.addEventListener("load", (event) => {
  hideSpanWithText(document, "Suggested", "suggested");
  hideSpanWithText(document, "Promoted", "promoted");
});

function hideSpanWithText(startElement, text, className) {
	const xpath = `//span[contains(text(), '${text}')]`;
  const spans = document.evaluate(xpath, startElement, null, XPathResult.ANY_TYPE, null);
  let allSpans = [];
  
  let thisSpan = spans.iterateNext();
  allSpans.push(thisSpan);
  while (thisSpan) {
  	thisSpan = spans.iterateNext();
  	if (thisSpan != null) {
  		allSpans.push(thisSpan);
  	}
	}
	
	for (var i = 0; i < allSpans.length; i++) {
			let currentSpan = allSpans[i];
			if (currentSpan != null){
				currentSpan.closest("div.feed-shared-update-v2").classList.add(className);	
			}
	}
}
