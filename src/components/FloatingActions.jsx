import { MessageCircle, Sparkles } from 'lucide-react';
import { whatsappLink } from '../data/siteData';

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="floating-button whatsapp">
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
      <a href={whatsappLink('Hello, I would like to speak with a Creative Home designer.')} target="_blank" rel="noreferrer" className="floating-button call">
        <MessageCircle size={18} />
        <span>Chat</span>
      </a>
      <a href="#contact" className="floating-button enquire">
        <Sparkles size={18} />
        <span>Enquire</span>
      </a>
    </div>
  );
}
