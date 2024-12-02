// @ts-nocheck
"use client";

import { useState } from "react";
import clsx from "clsx";
import { FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const items = [
	{
		question: "What payment do you accept?",
		answer:
			"We accept all major credit cards, Paypal and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
	},
	{
		question: "How does the pricing work for teams?",
		answer:
			"Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
	},
	{
		question: "Can I change my plan later?",
		answer:
			"Yes you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle. ",
	},
	{
		question: "Is my data secure?",
		answer:
			"Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users",
	},
];

type AccordionItemProps = {
	question: string;
	answer: string;
};

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div key={question} className="py-7 border-b border-white/30 ">
			<div
				className="flex items-center cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="flex-1 text-lg font-bold">{question}</span>
				{isOpen ? <FaMinus /> : <img src="/images/plus-icon.png" />}
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0, marginTop: 0 }}
						animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
						exit={{ opacity: 0, height: 0, marginTop: 0 }}
					>
						{answer}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export const FAQs = () => {
	return (
		<div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px]">
			{/* Container */}
			<div className="max-w-screen-md mx-auto px-[20px] md:px-[0px]">
				<h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
					Frequently asked questions
				</h2>
				<div className="mt-12">
					{items.map(({ question, answer }) => (
						<AccordionItem question={question} answer={answer} />
					))}
				</div>
			</div>
			{/* End Container */}
		</div>
	);
};
