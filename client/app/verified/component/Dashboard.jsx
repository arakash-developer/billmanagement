import React from 'react';
import SideBar from './SideBar';
import Link from 'next/link';
import { FcMoneyTransfer } from "react-icons/fc";
import Container from '@/app/component/layers/Container';

// Reusable ButtonLink Component
const ButtonLink = ({ href, icon, label }) => (
  <Link
    href={href}
    className="px-28 py-6 bg-orange-50 flex flex-col items-center border rounded-md hover:shadow-2xl transition-all duration-300"
    aria-label={label}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Dashboard = () => {
  return (
    <div>
      <Container className="h-screen flex gap-x-40">
        <SideBar />
        <div className="mt-10 flex w-full justify-between border-b border-gray-800">
          <div>
            <ButtonLink
              href="/verified/cash"
              icon={<FcMoneyTransfer className="w-20 h-20" />}
              label="Cash-Memo"
            />
          </div>
          <div>
            <ButtonLink
              href="/cash"
              icon={<FcMoneyTransfer className="w-20 h-20" />}
              label="Your Client"
            />
          </div>
          <div>
            <ButtonLink
              href="/cash"
              icon={<FcMoneyTransfer className="w-20 h-20" />}
              label="Blence $"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
