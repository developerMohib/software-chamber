"use client"
import { useState, ReactNode } from "react";
import wc from "world-countries";

type Country = {
    name: string;
    code: string;
    flag: ReactNode;
};

type PhoneDropdownProps = {
    selectedCountry: Country;
    onSelect: (country: Country) => void;
};

const countries: Country[] = wc.map((country) => ({
    name: country.name.common,
    code: `+${country.idd.root?.replace('+', '')}${country.idd.suffixes?.[0] || ''}`,
    flag: country.flag,
}));
function PhoneDropdown({ selectedCountry, onSelect }: PhoneDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (country: Country) => {
        onSelect(country);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                className="rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949] w-28 flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedCountry.flag}
                {selectedCountry.code}
                <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                    <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-60 max-h-[400px] overflow-y-auto">
                    <ul className="py-2 text-sm text-gray-700">
                        {countries.map((country, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700"
                                    onClick={() => handleSelect(country)}
                                >
                                    <span className="inline-flex items-center">
                                        {country.flag}
                                        {country.name} ({country.code})
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

const InputNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]); // default first country

    return (
        <div className="flex">
            <PhoneDropdown selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
            <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949] ml-4"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
    );
};

export default InputNumber;
