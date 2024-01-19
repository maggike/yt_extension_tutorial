document.addEventListener("DOMContentLoaded", ()=>{
    // GET THE SELECTORS OF THE BUTTONS
    const startVideoButton = document.querySelector("button#start_video")
    const stopVideoButton = document.querySelector("button#stop_video")

    // adding event listeners

    // startVideoButton.addEventListener("click", ()=>{
    //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //         chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
    //             if(!chrome.runtime.lastError){
    //                 console.log(response)
    //             } else{
    //                 console.log(chrome.runtime.lastError, 'error line 14')
    //             }
    //         })
    //     } )
    // })


    // startVideoButton.addEventListener("click", () => {
    //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //         const currentTab = tabs[0];
            
    //         // Create a new tab with the same URL as the current tab
    //         chrome.tabs.create({ url: currentTab.url, active: false }, (newTab) => {
    //             // Send a message to the new tab for recording
    //             chrome.tabs.sendMessage(newTab.id, { action: "request_recording" }, (response) => {
    //                 if (!chrome.runtime.lastError) {
    //                     console.log(response);
    //                 } else {
    //                     console.log(chrome.runtime.lastError, 'error line 14');
    //                 }
    //             });
    //         });
    //     });
    // });



    // startVideoButton.addEventListener("click", () => {
    //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //         const currentTab = tabs[0];
    
    //         // Create a new tab with the same URL as the current tab
    //         chrome.tabs.create({ url: currentTab.url, active: false }, (newTab) => {
    //             // Wait for the new tab to be fully loaded
    //             chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
    //                 if (tabId === newTab.id && changeInfo.status === 'complete') {
    //                     // Remove the listener
    //                     chrome.tabs.onUpdated.removeListener(listener);
    
    //                     // Send a message to the new tab for recording
    //                     chrome.tabs.sendMessage(newTab.id, { action: "request_recording" }, (response) => {
    //                         if (!chrome.runtime.lastError) {
    //                             console.log(response);
    //                         } else {
    //                             console.log(chrome.runtime.lastError, 'error line 14');
    //                         }
    //                     });
    //                 }
    //             });
    //         });
    //     });
    // });



    startVideoButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];


            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                function: () => {
                    const video = document.querySelector('video');
                    if (video) {
                        //video.volume = 0.0001;
                        video.pause();
                    }
                },
            });
    
            // Duplicate the current tab
                chrome.tabs.duplicate(currentTab.id, (newTab) => {
                
                // Send a message to the duplicated tab for recording
                     // Reduce the volume to 1% in the new tab
                // chrome.scripting.executeScript({
                //     target: { tabId: newTab.id },
                //     function: () => {
                //         const video = document.querySelector('video');
                //         if (video) {
                //         video.volume = 0.01; // Set volume to 1%
                //         }
                //     },
                //  });
                //chrome.tabs.update(newTab.id, { active: true, highlighted: true});
                // chrome.scripting.executeScript({
                //     target: { tabId: newTab.id },
                //     function: () => {
                //         const video = document.querySelector('video');
                //         if (video) {
                //             video.volume = 0.01;
                            
                //         }
                //     },
                // });

                // chrome.tabs.sendMessage(newTab.id, { action: "set_youtube_volume" }, (response) => {
                //     if (!chrome.runtime.lastError) {
                //         console.log(response);
                //     } else {
                //         console.log(chrome.runtime.lastError, 'error setting YouTube volume in new tab');
                //     }
                // });
                
                chrome.tabs.update(currentTab.id, { active: true, highlighted: true});
                // chrome.tabs.sendMessage(newTab.id, { action: "set_volume", volume: 0.01 }, (response) => {
                //     if (!chrome.runtime.lastError) {
                //         console.log(response);
                //     } else {
                //         console.log(chrome.runtime.lastError, 'error setting volume');
                //     }
                // });
                // chrome.scripting.executeScript({
                //     target: { tabId: newTab.id },
                //     function: () => {
                //         const video = document.querySelector('video');
                //         if (video) {
                //             video.volume = 0.0001; // Set to a very low volume
                //         }
                //     },
                // });
                // chrome.tabs.sendMessage(newTab.id, { action: "set_volume", volume: 0.0001 }, (response) => {
                //     if (!chrome.runtime.lastError) {
                //         console.log(response);
                //     } else {
                //         console.log(chrome.runtime.lastError, 'error setting volume in new tab');
                //     }
                // });

               
    
                

                

                

                

            
                chrome.tabs.sendMessage(currentTab.id, { action: "request_recording" }, (response) => {
                    if (!chrome.runtime.lastError) {
                        console.log(response);
                        
                    } else {
                        console.log(chrome.runtime.lastError, 'error line 14');
                    }
                });

                
               
            });
           
        
        });
    });


    
    
    


    stopVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 27')
                }
            })
        } )
    })
})



//#2
// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ currentWindow: true }, function (tabs) {
//             // Iterate through all tabs and send the message to each tab
//             tabs.forEach(tab => {
//                 chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                     }
//                 });
//             });
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ currentWindow: true }, function (tabs) {
//             // Iterate through all tabs and send the message to each tab
//             tabs.forEach(tab => {
//                 chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                     }
//                 });
//             });
//         });
//     });
// });





// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners

//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs.find(tab => tab.active).id, { action: "request_recording" }, function (response) {
//                 if (!chrome.runtime.lastError) {
//                     console.log(response);
//                 } else {
//                     console.log(chrome.runtime.lastError, 'error line 14');
//                 }
//             });
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs.find(tab => tab.active).id, { action: "stopvideo" }, function (response) {
//                 if (!chrome.runtime.lastError) {
//                     console.log(response);
//                 } else {
//                     console.log(chrome.runtime.lastError, 'error line 27');
//                 }
//             });
//         });
//     });
// });



//#3
// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             if (tabs.length > 0) {
//                 chrome.tabs.sendMessage(tabs[0].id, { action: "request_recording" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, 'error requesting recording in tab:', tabs[0].id);
//                     }
//                 });
//             } else {
//                 console.log('No active tab found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             if (tabs.length > 0) {
//                 chrome.tabs.sendMessage(tabs[0].id, { action: "stopvideo" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, 'error stopping video in tab:', tabs[0].id);
//                     }
//                 });
//             } else {
//                 console.log('No active tab found.');
//             }
//         });
//     });
// });


//#4
// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                         if (!chrome.runtime.lastError) {
//                             console.log(response);
//                         } else {
//                             console.log(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                         }
//                     });
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                         if (!chrome.runtime.lastError) {
//                             console.log(response);
//                         } else {
//                             console.log(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                         }
//                     });
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });






//#4
// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     },1000);
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     });
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });





// startVideoButton.addEventListener("click", () => {
//     chrome.tabs.query({}, function (tabs) {
//         if (tabs.length > 0) {
//             tabs.forEach(tab => {
//                 setTimeout(() => {
//                     chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, null, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     });
//                 }, 1000); // Adjust the delay time as needed
//             });
//         } else {
//             console.log('No tabs found.');
//         }
//     });
// });

// stopVideoButton.addEventListener("click", () => {
//     chrome.tabs.query({}, function (tabs) {
//         if (tabs.length > 0) {
//             tabs.forEach(tab => {
//                 setTimeout(() => {
//                     chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, null, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     });
//                 }, 1000); // Adjust the delay time as needed
//             });
//         } else {
//             console.log('No tabs found.');
//         }
//     });
// });



// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     setTimeout(() => {
//                         chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                             if (chrome.runtime.lastError) {
//                                 console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                             } else {
//                                 console.log(response);
//                             }
//                         });
//                     }, 1000); // Adjust the delay time as needed
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     setTimeout(() => {
//                         chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                             if (chrome.runtime.lastError) {
//                                 console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                             } else {
//                                 console.log(response);
//                             }
//                         });
//                     }, 1000); // Adjust the delay time as needed
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     });
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                         if (chrome.runtime.lastError) {
//                             console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                         } else {
//                             console.log(response);
//                         }
//                     });
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     setTimeout(() => {
//                         chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                             if (chrome.runtime.lastError) {
//                                 console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                             } else {
//                                 console.log(response);
//                             }
//                         });
//                     }, 1000); // Adjust the delay time as needed
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 tabs.forEach(tab => {
//                     setTimeout(() => {
//                         chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, null, function (response) {
//                             if (chrome.runtime.lastError) {
//                                 console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                             } else {
//                                 console.log(response);
//                             }
//                         });
//                     }, 1000); // Adjust the delay time as needed
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });





// document.addEventListener("DOMContentLoaded", () => {
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 const tab = tabs[0]; // Assuming you want to send the message to the first tab
//                 chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, function (response) {
//                     if (chrome.runtime.lastError) {
//                         console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                     } else {
//                         console.log(response);
//                     }
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             if (tabs.length > 0) {
//                 const tab = tabs[0]; // Assuming you want to send the message to the first tab
//                 chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, function (response) {
//                     if (chrome.runtime.lastError) {
//                         console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                     } else {
//                         console.log(response);
//                     }
//                 });
//             } else {
//                 console.log('No tabs found.');
//             }
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", () => {
//     // GET THE SELECTORS OF THE BUTTONS
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     const sendMessageToTab = (tabId, action, callback) => {
//         chrome.tabs.sendMessage(tabId, { action }, null, function (response) {
//             if (chrome.runtime.lastError) {
//                 console.error(chrome.runtime.lastError, `Error ${action} in tab:`, tabId);
//             } else {
//                 console.log(response);
//             }
//             if (callback) {
//                 callback();
//             }
//         });
//     };

//     // adding event listeners
//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             tabs.forEach(tab => {
//                 setTimeout(() => {
//                     sendMessageToTab(tab.id, "request_recording");
//                 }, 1000); // Adjust the delay time as needed
//             });
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, function (tabs) {
//             tabs.forEach(tab => {
//                 setTimeout(() => {
//                     sendMessageToTab(tab.id, "stopvideo");
//                 }, 1000); // Adjust the delay time as needed
//             });
//         });
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const startVideoButton = document.querySelector("button#start_video");
//     const stopVideoButton = document.querySelector("button#stop_video");

//     startVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, (tabs) => {
//             tabs.forEach((tab) => {
//                 chrome.tabs.sendMessage(tab.id, { action: "request_recording" }, (response) => {
//                     if (chrome.runtime.lastError) {
//                         console.error(chrome.runtime.lastError, 'error requesting recording in tab:', tab.id);
//                     } else {
//                         console.log(response);
//                     }
//                 });
//             });
//         });
//     });

//     stopVideoButton.addEventListener("click", () => {
//         chrome.tabs.query({}, (tabs) => {
//             tabs.forEach((tab) => {
//                 chrome.tabs.sendMessage(tab.id, { action: "stopvideo" }, (response) => {
//                     if (chrome.runtime.lastError) {
//                         console.error(chrome.runtime.lastError, 'error stopping video in tab:', tab.id);
//                     } else {
//                         console.log(response);
//                     }
//                 });
//             });
//         });
//     });
// });
