import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Github, Dribbble, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">YourCompany</h3>
            <p className="text-gray-400 mb-4">
              Transforming Ideas Into Digital Reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Dribbble size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Web Dev</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Mobile Apps</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">AI Solutions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cloud Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Whitepapers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 YourCompany. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;