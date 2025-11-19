import React from 'react';
import { Link } from 'react-router-dom';
import { GlowingEffect } from './ui/GlowingEffect';

export default function BlogCard({ title, excerpt, date, category, slug, image, readTime }) {
  return (
    <article className="relative h-full">
      <div className="relative h-full rounded-2xl border border-gray-200 p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        <Link to={`/blog/${slug}`} className="block h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-[#092f73]/10 text-[#092f73] rounded-full">
                  {category}
                </span>
                <span className="text-xs text-gray-500">{date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#092f73] transition-colors line-clamp-2">
                {title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                {excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500">{readTime} min read</span>
                <span className="inline-flex items-center text-[#092f73] font-semibold text-sm">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
