import { useMemo, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/siteData';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  plotSize: '',
  propertyType: '',
  budget: '',
  projectRequirements: '',
};

const fields = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'plotSize', label: 'Plot Size', type: 'text', required: true },
  { name: 'propertyType', label: 'Property Type', type: 'text', required: true },
  { name: 'budget', label: 'Budget', type: 'text', required: true },
];

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return Object.values(form).every((value) => String(value).trim().length > 0);
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    fields.forEach((field) => {
      if (!form[field.name].trim()) {
        nextErrors[field.name] = 'This field is required';
      }
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    const message = `Hello Creative Home Plan & Design, my name is ${form.fullName}. Phone: ${form.phone}. Email: ${form.email}. City: ${form.city}. Plot size: ${form.plotSize}. Property type: ${form.propertyType}. Budget: ${form.budget}. Requirements: ${form.projectRequirements}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <p className="section-kicker dark">CONTACT</p>
        <h2>
          Speak With Our
          <span>Design Team.</span>
        </h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          {fields.map((field) => (
            <label key={field.name} className="field">
              <span>{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.label}
                aria-invalid={Boolean(errors[field.name])}
              />
              {errors[field.name] && <small>{errors[field.name]}</small>}
            </label>
          ))}

          <label className="field full-width">
            <span>Project Requirements</span>
            <textarea
              name="projectRequirements"
              value={form.projectRequirements}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your vision, site, lifestyle and timeline"
            />
            {errors.projectRequirements && <small>{errors.projectRequirements}</small>}
          </label>
        </div>

        <div className="form-footer">
          {!isValid && <p className="form-tip">Please complete all required fields to send your enquiry.</p>}
          {submitted && <p className="form-success">Your project enquiry has been submitted successfully.</p>}
          <button type="submit" className="primary-button">
            Send On WhatsApp
            <MessageCircle size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}
