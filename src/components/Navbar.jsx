import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {
    Bars3Icon, XMarkIcon,
    HomeIcon, BuildingOfficeIcon, SparklesIcon, ClockIcon,
    ChatBubbleLeftRightIcon, PhoneIcon
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "#home", icon: HomeIcon, color: "bg-orange-50 border-l-4 border-[#EC682E]" },
    { name: "Rooms", href: "#rooms", icon: BuildingOfficeIcon, color: "bg-amber-50  border-l-4 border-amber-400" },
    { name: "Facilities", href: "#facilities", icon: SparklesIcon, color: "bg-yellow-50 border-l-4 border-yellow-400" },
    { name: "Timings", href: "#about", icon: ClockIcon, color: "bg-lime-50   border-l-4 border-lime-500" },
    { name: "Contact", href: "#contact", icon: ChatBubbleLeftRightIcon, color: "bg-teal-50   border-l-4 border-teal-500" },
];

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6E3] border-b border-black/5"
        >
            {/* Main bar */}
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

                {/* Desktop Center Navigation */}
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

                {/* Desktop Right CTA Links */}
                <div className="hidden md:flex items-center gap-10">
                    <a
                        href="tel:+919425338217"
                        className="text-[13px] uppercase tracking-wider text-[#111] hover:text-[#EC682E] transition relative group"
                    >
                        Call Now
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EC682E] transition-all group-hover:w-full"></span>
                    </a>
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

            {/* Mobile Dropdown Menu */}
            <DisclosurePanel className="md:hidden bg-[#FDF6E3] border-t border-black/10 shadow-xl">
                <div className="flex flex-col gap-2 py-4" style={{ paddingLeft: "0.8cm", paddingRight: "0.5cm" }}>

                    {/* Nav Links with icons and colored rows */}
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-[#111] text-sm font-semibold uppercase tracking-wider transition-all active:opacity-70 ${item.color}`}
                            >
                                <Icon className="h-5 w-5 shrink-0 text-[#EC682E]" />
                                {item.name}
                            </DisclosureButton>
                        );
                    })}

                    {/* Divider */}
                    <div className="my-1 border-t border-black/10" />

                    {/* Call Now - flat neutral row */}
                    <a
                        href="tel:+919425338217"
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-pink-50 border-l-4 border-pink-400 text-[#111] text-sm font-semibold uppercase tracking-wider transition-all active:opacity-70"
                    >
                        <PhoneIcon className="h-5 w-5 shrink-0 text-[#EC682E]" />
                        Call Now
                    </a>

                    {/* WhatsApp Enquiry - flat neutral row */}
                    <a
                        href="https://wa.me/919425338217?text=Hello%20I%20want%20to%20enquire%20about%20ROOM8%20Hostel"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-green-50 border-l-4 border-green-400 text-[#111] text-sm font-semibold uppercase tracking-wider transition-all active:opacity-70"
                    >
                        <ChatBubbleLeftRightIcon className="h-5 w-5 shrink-0 text-green-600" />
                        WhatsApp Enquiry
                    </a>

                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}