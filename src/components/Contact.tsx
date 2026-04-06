import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { ContactBg } from './SectionBg';
import { siteConfig } from '../data/content';

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: siteConfig.location,
    href: undefined,
  },
];

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: siteConfig.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: siteConfig.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-10 sm:py-16">
      <ContactBg />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? Let's connect."
        />

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 sm:p-10"
          >
            {/* Contact info */}
            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl p-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <div key={item.label} className="p-3">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:brightness-110"
              >
                <FiMail className="h-4 w-4" />
                Send Me an Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
