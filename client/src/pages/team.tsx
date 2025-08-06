import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const businessExperts = [
  {
    name: "Ikhwanul Hakim",
    role: "Co Founder",
    experience: "7 years of aviation business experience & 3 years of Product Management Experience",
    expertise: ["Aviation Business", "Product Management", "Strategic Planning"],
  },
  {
    name: "Rama Adhita Adrian",
    role: "Business Expert",
    experience: "ex-Division Head @GOTO group, 14 years of Product & Business Management",
    expertise: ["Business Management", "Product Strategy", "Enterprise Solutions"],
  },
  {
    name: "Damar Jayengrana",
    role: "Business Expert", 
    experience: "ex-GOTO Group, 13 Years of Product Management & Marketing Management",
    expertise: ["Product Management", "Marketing Strategy", "Digital Transformation"],
  },
];

const techExperts = [
  {
    name: "Andhi Sumarjo",
    role: "Co-Founder",
    experience: "Python master with 10 years of software engineering experiences",
    expertise: ["Python Development", "Software Architecture", "System Design"],
  },
  {
    name: "Rachmat Rahmadyan",
    role: "Tech Expert",
    experience: "ex-GOTO Group, expert in IoT and Software Development",
    expertise: ["IoT Solutions", "Software Development", "Hardware Integration"],
  },
];

function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {member.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
            <p className="text-blue-600 font-semibold">{member.role}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-2">Experience</h4>
            <p className="text-slate-700 leading-relaxed">{member.experience}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill: string, skillIndex: number) => (
                <span
                  key={skillIndex}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-slate-800">Our Team</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Expert professionals driving digital transformation with deep industry knowledge and technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Experts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Business Experts</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600">
                Strategic leaders with deep industry experience and proven track records in business transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {businessExperts.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Experts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Tech Experts</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600">
                Technical innovators with extensive software engineering experience and cutting-edge expertise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {techExperts.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team combines business acumen with technical expertise to deliver transformative digital solutions.
            </p>
            <Link href="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}