
const GEMENI_API_KEY = "AIzaSyBwdmukEUwsLT0Za2op0r2m_nISRRHhCfI";
const RAPID_API_GOOGLE_NEWS_KEY = "622126072amsh4a8bbc4b9514dc4p12168djsnb051a3ffe22e"


//context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "Illuminews",
      title: "Ask Illuminews: What's going on?",
      contexts: ["selection"],
    });
  });

  // chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  //   if (info.menuItemId === "Scholarly" && info.selectionText) {
  //     chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       files: ["contents/loading.js"],
  //     });
  //     const selectedText = info.selectionText;


  //   }
  // }

// async function fetchGoogleNews() {
//   const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '622126072amsh4a8bbc4b9514dc4p12168djsnb051a3ffe22e',
//       'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the function immediately
// fetchGoogleNews();