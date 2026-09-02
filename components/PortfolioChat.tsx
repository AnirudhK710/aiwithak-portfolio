"use client";

import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starters = [
  "What has Anirudh built?",
  "Tell me about EthicLens",
  "What are his AI skills?",
  "Tell me about his research",
];

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm Anirudh's AI portfolio assistant. I can answer questions about his AI engineering work, projects, research, education, Responsible AI expertise, and professional background.",
    },
  ]);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askQuestion(question: string) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: cleanQuestion,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: cleanQuestion,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.answer ||
          data.error ||
          "I couldn't answer that right now.",
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The portfolio assistant is temporarily unavailable. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    askQuestion(input);
  }

  return (
    <>
      <button
        type="button"
        className="portfolio-chat-trigger"
        onClick={() =>
          setOpen((current) => !current)
        }
        aria-label="Ask about Anirudh"
      >
        {open ? (
          <X size={20} />
        ) : (
          <MessageCircle size={20} />
        )}

        <span>Ask About Anirudh</span>
      </button>

      {open && (
        <aside className="portfolio-chat">
          <div className="portfolio-chat-header">
            <div className="portfolio-chat-avatar">
              <Bot size={22} />
            </div>

            <div>
              <strong>Anirudh AI</strong>
              <span>Portfolio Assistant</span>
            </div>

            <button
              type="button"
              className="portfolio-chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          <div className="portfolio-chat-scope">
            <Sparkles size={14} />

            <span>
              Ask about Anirudh's work, AI
              projects, research, education,
              or skills.
            </span>
          </div>

          <div className="portfolio-chat-messages">
            {messages.map((message, index) => (
  <div
    key={`${message.role}-${index}`}
    className={`chat-message chat-message-${message.role}`}
  >
    {message.role === "assistant" ? (
      <ReactMarkdown>
        {message.content}
      </ReactMarkdown>
    ) : (
      message.content
    )}
  </div>
))}

            {loading && (
              <div className="chat-message chat-message-assistant chat-loading">
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="chat-starters">
              {starters.map((starter) => (
                <button
                  type="button"
                  key={starter}
                  onClick={() =>
                    askQuestion(starter)
                  }
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          <form
            className="portfolio-chat-form"
            onSubmit={handleSubmit}
          >
            <input
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              maxLength={600}
              placeholder="Ask about Anirudh..."
              aria-label="Ask about Anirudh"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send question"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="portfolio-chat-footer">
            Answers are limited to Anirudh's
            approved portfolio knowledge.
          </div>
        </aside>
      )}
    </>
  );
}