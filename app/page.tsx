"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  Moon,
  Paperclip,
  Smile,
  Send,
  File,
  Contact,
  ChartArea,
  MessageSquare,
  Settings,
  Sun,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [message, setMessage] = useState("");
  const [attachments] = useState([]);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      console.log("Mensagem enviada:", message);
      setMessage("");
    }
  };

  // const handleAttachment = (event) => {
  //   const files = Array.from(event.target.files);
  //   setAttachments([...attachments, ...files]);
  // };

  const handleEmojiClick = () => {
    // Aqui você pode implementar um seletor de emoji
    console.log("Seletor de emoji clicado");
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Sidebar */}
      <div className={`w-64 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-4`}>
        <h1 className="text-xl font-bold mb-4">Workers</h1>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <File className="mr-2 h-4 w-4" />
            Resumo
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Contact className="mr-2 h-4 w-4" />
            Contatos
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ChartArea className="mr-2 h-4 w-4" />
            Estatísticas
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start bg-yellow-500 text-gray-900"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chats
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
        </div>
        <div className="mt-8">
          <Button variant="outline" className="w-full mb-2">
            Todos (35)
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Live Chat (2)
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Arquivados
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Bloqueados
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Lixeira
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <header
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          } p-4 flex justify-between items-center`}
        >
          <Input
            type="text"
            placeholder="Pesquisar"
            className={`w-64 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}
          />
          <div className="flex items-center space-x-4">
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Bell className="h-5 w-5" />
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>HD</AvatarFallback>
            </Avatar>
            <div
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              } rounded-lg p-2 max-w-md`}
            >
              <p className="text-sm">Olá, como eu posso te ajudar hoje?</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 justify-end">
            <div className="bg-blue-600 rounded-lg p-2 max-w-md">
              <p className="text-sm">
                Estou com probleamas para acessar o sistema. Pode me ajudar?
              </p>
            </div>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Escreva uma mensagem..."
              className={`flex-1 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <label htmlFor="file-upload">
              <Button size="icon" variant="ghost">
                <Paperclip className="h-5 w-5" />
              </Button>
            </label>
            <input id="file-upload" type="file" multiple className="hidden" />
            <Button size="icon" variant="ghost" onClick={handleEmojiClick}>
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
          {attachments.length > 0 && (
            <div className="mt-2">
              <p>Anexos:</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className={`w-64 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-4`}>
        <div className="text-center mb-4">
          <Avatar className="w-20 h-20 mx-auto mb-2">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>HD</AvatarFallback>
          </Avatar>
          <h2 className="font-bold">Help Desk Agent</h2>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Online
          </p>
        </div>
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            Chamadas
          </Button>
          <Button variant="outline" className="w-full">
            Vídeos
          </Button>
          <Button variant="outline" className="w-full">
            Profile
          </Button>
        </div>
        <div className="mt-8">
          <h3 className="font-bold mb-2">Anexos</h3>
        </div>
        <div className="mt-4">
          <h3 className="font-bold mb-2">Agendamentos</h3>
          {/* Add appointment items here */}
        </div>
      </div>
    </div>
  );
}
