import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Building, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language-context";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: t("contact.toast.success.title"),
          description: t("contact.toast.success.description"),
        });
        
        setFormData({
          fullName: "",
          company: "",
          email: "",
          message: "",
        });
        
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: t("contact.toast.error.title"),
        description: t("contact.toast.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{t("contact.sendMessage")}</h2>
                  <p className="text-blue-100">{t("contact.subtitle")}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-blue-200 transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>{t("contact.form.fullName")}</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.fullNamePlaceholder")}
                    required
                    className="w-full"
                    data-testid="modal-input-fullname"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="flex items-center space-x-2 mb-2">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span>{t("contact.form.company")}</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.companyPlaceholder")}
                    required
                    className="w-full"
                    data-testid="modal-input-company"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{t("contact.email")}</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    className="w-full"
                    data-testid="modal-input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>{t("contact.form.message")}</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    rows={4}
                    className="w-full resize-none"
                    data-testid="modal-input-message"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                    data-testid="button-cancel"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                    data-testid="button-submit-modal"
                  >
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
