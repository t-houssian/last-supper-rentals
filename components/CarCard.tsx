// components/CarCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type CarCardProps = {
  title: string;
  imageSrc: string;
  pricePerDay: number;
  href: string;
};

const CarCard: React.FC<CarCardProps> = ({
  title,
  imageSrc,
  pricePerDay,
  href,
}) => (
  <div className="max-w-sm bg-dark-green border border-gray-700 rounded-lg shadow-md overflow-hidden">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={250}
      className="object-cover"
    />
    <div className="p-4">
      <h3 className="text-2xl font-semibold text-neon-green">{title}</h3>
      <p className="mt-2 text-lg text-neon-green">${pricePerDay} / day</p>
      <Link
        href={href}
        className="mt-4 inline-block px-4 py-2 bg-neon-green text-dark-green rounded hover:bg-white"
      >
        Rent Now
      </Link>
    </div>
  </div>
);

export default CarCard;
