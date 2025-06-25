
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m here to help you learn about TechNova Solutions. Ask me anything about our services, team, or how we can help your business!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const parseResponse = (response: string) => {
    // Remove <think> tags and content
    const cleanResponse = response.replace(/<think>[\s\S]*?<\/think>/g, '');
    
    // Convert **text** to bold
    const boldText = cleanResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert bullet points to proper list items
    const withLists = boldText.replace(/^- (.*$)/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in ul tags
    const withUlTags = withLists.replace(/((<li>.*<\/li>\s*)+)/g, '<ul class="list-disc pl-4 space-y-1">$1</ul>');
    
    return withUlTags;
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/e9df7804-4648-48df-b6ee-e286d94fe997', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: inputText
        })
      });

      if (response.ok) {
        const data = await response.text();
        const parsedResponse = parseResponse(data);
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: parsedResponse,
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Chat API Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly at info@technova.in',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 hover:from-blue-600 hover:via-purple-700 hover:to-blue-600 text-white p-5 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-scale-in flex flex-col overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white rounded-t-lg flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
            <div className="flex items-center justify-between relative z-10">
              <CardTitle className="text-xl font-bold flex items-center">
                <Bot className="h-6 w-6 mr-3 animate-bounce" />
                TechNova Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-9 w-9 rounded-full transition-all duration-200 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-sm opacity-90 mt-1">Online • Ready to help</div>
          </CardHeader>
          
          <CardContent className="p-0 flex-1 flex flex-col min-h-0 bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl transition-all duration-200 hover:scale-105 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-700/80 backdrop-blur-sm text-gray-100 border border-slate-600/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {!message.isUser && <Bot className="h-5 w-5 mt-1 flex-shrink-0 text-blue-400" />}
                      {message.isUser && <User className="h-5 w-5 mt-1 flex-shrink-0" />}
                      <div
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: message.text }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700/80 backdrop-blur-sm text-gray-100 p-4 rounded-2xl border border-slate-600/50">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-blue-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-5 border-t border-slate-600/50 bg-slate-800/95 backdrop-blur-sm flex-shrink-0">
              <div className="flex space-x-3">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about TechNova..."
                  className="flex-1 bg-slate-700/80 text-white placeholder-gray-400 border border-slate-600/50 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[50px] max-h-24 backdrop-blur-sm transition-all duration-200"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 flex-shrink-0 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;
