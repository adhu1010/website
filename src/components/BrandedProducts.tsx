'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS_LIST, ProductItem } from '@/data/products';
import { MILL_INFO } from '@/data/millInfo';
import { WhatsAppIcon, PhoneIcon, ScaleIcon, ClockIcon } from './Icons';

interface BrandedProductsProps {
  onSelectProductForInquiry?: (product: ProductItem) => void;
}

export default function BrandedProducts({ onSelectProductForInquiry }: BrandedProductsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'spices' | 'flours'>('all');

  const spices = PRODUCTS_LIST.filter((p) => p.category === 'spices');
  const flours = PRODUCTS_LIST.filter((p) => p.category === 'flours');

  const renderProductRow = (item: ProductItem) => {
    const whatsappProductUrl = `https://wa.me/919447281042?text=Hello%20KR%20Mill,%20I%20would%20like%20to%20order%20or%20inquire%20about%20${encodeURIComponent(
      item.nameEnglish
    )}%20(${encodeURIComponent(item.nameMalayalam)}).`;

    return (
      <div
        key={item.id}
        className="border border-mill-border bg-mill-unbleached p-4 sm:p-6 mb-4 hover:border-mill-borderDark transition-colors duration-150"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Product Authentic Photo Thumbnail */}
          <div className="md:col-span-3">
            <div className="relative aspect-[4/3] w-full border border-mill-border overflow-hidden bg-mill-paper">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="mt-2 text-[11px] font-mono text-mill-muted uppercase tracking-wider">
              Batch: Milled Fresh
            </div>
          </div>

          {/* Product Details & Specifications */}
          <div className="md:col-span-6">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-mill-ink">
                {item.nameEnglish}
              </h3>
              <span className="font-serif text-base text-mill-terracotta font-medium">
                ({item.nameMalayalam})
              </span>
            </div>

            <p className="text-sm text-mill-muted leading-relaxed mb-3">
              {item.shortDescription}
            </p>

            <div className="text-xs text-mill-ink bg-mill-paper/70 p-3 border border-mill-border mb-3">
              <div className="mb-1">
                <span className="font-semibold">Ingredients: </span>
                {item.ingredients}
              </div>
              <div>
                <span className="font-semibold">Preparation note: </span>
                {item.detailedNotes}
              </div>
            </div>

            {/* Pack sizes and shelf life */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-mill-muted">
              <div className="flex items-center gap-1.5">
                <ScaleIcon size={13} className="text-mill-ink" />
                <span>Available Packs: </span>
                <span className="font-medium text-mill-ink">
                  {item.packSizes.join(', ')}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon size={13} className="text-mill-ink" />
                <span>Shelf Life: </span>
                <span className="font-medium text-mill-ink">{item.shelfLife}</span>
              </div>
            </div>
          </div>

          {/* Pricing & Direct Inquiry Actions */}
          <div className="md:col-span-3 flex flex-col justify-between h-full border-t md:border-t-0 md:border-l border-mill-border pt-4 md:pt-0 md:pl-6">
            <div>
              <span className="text-xs text-mill-muted block">Direct Mill Rate:</span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-mill-terracotta mb-1">
                {item.retailRatePerKg}
              </div>
              <span className="text-[11px] text-mill-muted block mb-4">
                Available at mill counter and for wholesale / catering delivery.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={whatsappProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2.5 text-xs font-serif font-medium bg-mill-leaf hover:bg-mill-leafHover text-mill-cream transition-colors duration-150 rounded-sm inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={14} />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href={MILL_INFO.phoneDial}
                className="w-full text-center px-4 py-2 text-xs font-serif font-medium bg-mill-cream hover:bg-mill-paper text-mill-ink border border-mill-borderDark transition-colors duration-150 rounded-sm inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon size={13} />
                <span>Call to Order</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section id="branded-products" className="w-full py-12 md:py-20 bg-mill-cream border-t border-mill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-mill-border">
          <div className="max-w-2xl">
            <span className="text-xs font-serif uppercase tracking-widest text-mill-terracotta mb-2 block font-semibold">
              Counter Retail &amp; Wholesale Supply
            </span>
            <h2 className="fluid-section-title font-serif text-mill-ink font-bold mb-2">
              Our Branded Packaged Products
            </h2>
            <p className="text-sm sm:text-base text-mill-muted">
              Purity guaranteed from farm-sourced crops to sealed food-grade packaging. Milled on site in Mullassery without chemical colors, spent spices, or synthetic starch.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-mill-paper p-1 border border-mill-border self-start md:self-auto rounded-sm">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-serif transition-colors duration-150 rounded-none ${
                activeTab === 'all'
                  ? 'bg-mill-cream font-bold text-mill-ink border border-mill-borderDark'
                  : 'text-mill-muted hover:text-mill-ink'
              }`}
            >
              All Staples (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spices')}
              className={`px-4 py-2 text-xs font-serif transition-colors duration-150 rounded-none ${
                activeTab === 'spices'
                  ? 'bg-mill-cream font-bold text-mill-ink border border-mill-borderDark'
                  : 'text-mill-muted hover:text-mill-ink'
              }`}
            >
              Ground Spices &amp; Masalas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('flours')}
              className={`px-4 py-2 text-xs font-serif transition-colors duration-150 rounded-none ${
                activeTab === 'flours'
                  ? 'bg-mill-cream font-bold text-mill-ink border border-mill-borderDark'
                  : 'text-mill-muted hover:text-mill-ink'
              }`}
            >
              Fresh Milled Flours
            </button>
          </div>
        </div>

        {/* Catalog Categories */}
        {(activeTab === 'all' || activeTab === 'spices') && (
          <div className="mb-12">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-mill-border">
              <h3 className="font-serif text-xl font-bold text-mill-ink">
                Category A: Pure Ground Spices &amp; Masalas
              </h3>
              <span className="text-xs font-serif text-mill-terracotta">
                നാടൻ മസാലപ്പൊടികൾ
              </span>
            </div>
            <div className="space-y-4">
              {spices.map(renderProductRow)}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'flours') && (
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-mill-border">
              <h3 className="font-serif text-xl font-bold text-mill-ink">
                Category B: Fresh Milled Grain Flours
              </h3>
              <span className="text-xs font-serif text-mill-terracotta">
                കല്ലിൽ പൊടിച്ച മാവുകൾ
              </span>
            </div>
            <div className="space-y-4">
              {flours.map(renderProductRow)}
            </div>
          </div>
        )}

        {/* Packaging and Wholesale Notice */}
        <div className="mt-10 p-4 sm:p-6 bg-mill-unbleached border border-mill-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-mill-muted">
            <strong className="font-serif text-sm font-semibold text-mill-ink block mb-1">
              Bulk Ordering for Caterers, Restaurants &amp; Grocery Merchants
            </strong>
            Special wholesale lot pricing available on 10kg, 25kg, and 50kg grain bags with scheduled local delivery across Venkitangu, Mullassery, and Pavaratty regions.
          </div>
          <a
            href={MILL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-serif font-semibold bg-mill-ink hover:bg-mill-muted text-mill-cream whitespace-nowrap transition-colors duration-150 rounded-sm"
          >
            Inquire Bulk Commercial Supply
          </a>
        </div>

      </div>
    </section>
  );
}
