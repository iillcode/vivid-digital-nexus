
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
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 bg-slate-800/95 backdrop-blur-lg border-white/20 shadow-2xl animate-scale-in flex flex-col">
          <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                TechNova Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex-1 flex flex-col min-h-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-slate-700 text-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                      {message.isUser && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                      <div
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: message.text }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 text-gray-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
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
            <div className="p-4 border-t border-slate-600 bg-slate-800/95 flex-shrink-0">
              <div className="flex space-x-2">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about TechNova..."
                  className="flex-1 bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px]"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-2 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
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
