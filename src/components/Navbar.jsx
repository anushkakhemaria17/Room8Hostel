import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Timings", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6E3] border-b border-black/5"
        >
            {/* 1 cm margin on both sides */}
            <div
                className="flex h-[72px] items-center justify-between"
                style={{ marginLeft: "1cm", marginRight: "1cm" }}
            >

                {/* Logo */}
                <a href="#home" className="flex flex-col leading-tight">
                    <span className="text-2xl font-bold text-[#111] tracking-wide">
                        ROOM<span className="text-[#EC682E]">8</span>
                    </span>
                    <span className="text-[11px] text-gray-500 italic">
                        Home Away From Home
                    </span>
                </a>

                {/* Center Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-[13px] uppercase tracking-wider text-[#111] hover:text-[#EC682E] transition relative group"
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EC682E] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right CTA Links */}
                <div className="hidden md:flex items-center gap-10">

                    {/* Call Link */}
                    <a
                        href="tel:+919425338217"
                        className="text-[13px] uppercase tracking-wider text-[#111] hover:text-[#EC682E] transition relative group"
                    >
                        Call Now
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EC682E] transition-all group-hover:w-full"></span>
                    </a>

                    {/* WhatsApp Link */}
                    <a
                        href="https://wa.me/919425338217?text=Hello%20I%20want%20to%20enquire%20about%20ROOM8%20Hostel"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] uppercase tracking-wider text-[#111] hover:text-[#EC682E] transition relative group"
                    >
                        WhatsApp Enquiry
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EC682E] transition-all group-hover:w-full"></span>
                    </a>

                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <DisclosureButton className="p-2 text-[#111]">
                        <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="md:hidden bg-[#FDF6E3] border-t border-black/5">
                <div className="space-y-2 px-4 py-5">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block px-4 py-3 text-base text-[#111] hover:bg-[#EC682E] hover:text-white rounded-lg transition"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}