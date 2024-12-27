
import React, { useState, useEffect} from "react";

const ChatPopup = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
      setIsOpen(!isOpen);
    };

    // Function which listens to "esc" key to close the popup
    const closeChatOnEscape = (event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };

    useEffect(() => {
        // Add event listener for Escape key
        if (isOpen) {
          window.addEventListener("keydown", closeChatOnEscape);
        }
        // Clean up the event listener when the component unmounts or the chat is closed
        return () => {
        window.removeEventListener("keydown", closeChatOnEscape);
      };
    }, [isOpen]);
  
    return (
      <div>
        {/* Chatbox Widget */}
        <div
          className="fixed bottom-4 right-4 bg-[#B46B42] text-white rounded-full p-3 shadow-lg cursor-pointer"
          onClick={toggleChat}
        >
            <img src="../src/assets/chatBoxWidget.png" alt="chatbox" className="w-10 h-10" />
        </div>
  
        {/* Chat Popup */}
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
                <div
                className="fixed bottom-16 right-6 
                w-1/2
                max-w-[600px]
                h-[55vh]
                max-h-[90vh]
                bg-white 
                shadow-lg border
                border-gray-300 
                rounded-lg"
                style={{ zIndex: 1000 }}
                >
                <div className="flex flex-col h-full p-4">
                    {/* X button*/}
                        <button
                            onClick={toggleChat}
                            className="absolute top-3 right-3 z-20 text-gray-500 hover:text-black">
                        &#x2715;
                    </button>

                    {/* Logo */}
                    <div className="flex justify-center items-center z-10">
                        <img src="../src/assets/StayFur.png" alt="StayFur Logo" className="h-20 w-auto" />
                    </div>

                    <p className="text-sm text-gray-600 mb-4 flex justify-center">
                        We usually respond within a few hours during our opening hours.
                    </p>

                    <input
                        type="text"
                        placeholder="Name"
                        className="block w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="block w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <textarea
                        placeholder="How can we help?"
                        className="block w-full h-full p-2 border border-gray-300 rounded mb-4 flex-grow"
                        rows="5"
                    />
                    <button className="w-full bg-[#B46B42] text-white p-2 rounded hover:bg-[#9f5938]">
                        Send a message
                    </button>
                    </div>
                </div>
                
            </div>     
        )}
      </div>
    );
}

export default ChatPopup;