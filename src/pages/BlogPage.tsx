import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary?: string; // Optional: only for featured post or detailed views
  imageUrl?: string; // URL for the image
  likes: number;
  isFeatured?: boolean;
  badgeText?: string; // e.g., "最新发布"
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '快连 VPN 祝全球华人用户蛇年大吉！',
    date: '2025-01-23',
    summary:
      '值此辞旧迎新之际，快连 VPN 团队祝您蛇年大吉，蒸蒸日上，财源滚滚，幸福安康！续乘龙气迎风上，又如灵蛇自在游。',
    imageUrl: '/assets/blog7.png',
    likes: 26,
    isFeatured: true,
    badgeText: '最新发布',
  },
  {
    id: '2',
    title: '杀毒软件报 VPN 病毒，VPN 真的安全吗？',
    date: '2024-12-06',
    imageUrl: '/assets/blog1.png',
    likes: 59,
  },
  {
    id: '3',
    title: '连多设备共享都做不到，快连 VPN 团队在摸鱼吗？',
    date: '2024-08-30',
    imageUrl: '/assets/blog2.png',
    likes: 1500,
  },
  {
    id: '4',
    title: '已经有人上当了! 针对中国 VPN 用户最新骗局',
    date: '2024-08-01',
    imageUrl: '/assets/blog3.png',
    likes: 1100,
  },
  {
    id: '5',
    title: '深度评测：快连VPN的速度与稳定性如何？',
    date: '2024-07-15',
    imageUrl: '/assets/blog4.png',
    likes: 850,
  },
  {
    id: '6',
    title: 'VPN选择困难？看这一篇就够了！',
    date: '2024-06-20',
    imageUrl: '/assets/blog5.png',
    likes: 1200,
  },
  {
    id: '7',
    title: '保护您的在线隐私：VPN的重要性',
    date: '2024-05-05',
    imageUrl: '/assets/blog6.png',
    likes: 950,
  },
];

const FeaturedBlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl border border-gray-300 overflow-hidden flex flex-col md:flex-row mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <div className="md:w-[50%] lg:w-1/2 relative order-1 md:order-none">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-60 sm:h-72 md:h-[343px] object-cover" // Adjusted image height
          />
        ) : (
          <div className="w-full h-60 sm:h-72 md:h-[343px] bg-slate-100 flex items-center justify-center text-slate-500 text-base sm:text-lg md:text-xl p-4 text-center">
            {post.title} - 图像占位符
          </div>
        )}
        {post.badgeText && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 bg-green-500 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded">
            {' '}
            {/* Adjusted badge */}
            {post.badgeText}
          </span>
        )}
      </div>
      <div className="md:w-[50%] lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-2 md:order-none">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-text-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight hover:text-brand-purple transition-colors">
          {' '}
          {/* Adjusted title size & margin */}
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        {post.summary && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
            {' '}
            {/* Adjusted summary size & margin */}
            {post.summary}
          </p>
        )}
        <div className="flex justify-between items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-auto">
          {' '}
          {/* Adjusted date/likes text size */}
          <span className="font-semibold">
            {' '}
            {/* Date font size adjusted by parent */}
            {post.date}
          </span>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-1 sm:mr-1.5 text-gray-400" // Adjusted icon size
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M346.313 508.885c1.836 0 3.319 1.484 3.319 3.319v319.434c0 1.835-1.483 3.318-3.319 3.318h-164.778c-1.836 0-3.319-1.483-3.319-3.318v-319.434c0-1.836 1.483-3.318 3.319-3.318h164.778M346.313 475.514h-164.778c-20.228 0-36.689 16.462-36.689 36.69v319.434c0 20.228 16.462 36.689 36.689 36.689h164.778c20.227 0 36.69-16.463 36.69-36.689v-319.434c0-20.227-16.462-36.69-36.69-36.69v0z"></path>
              <path d="M662.874 188.505c3.078 0 5.784 0.556 7.49 1.001 9.196 8.325 47.387 46.664 30.794 95.849-21.080 62.572-52.856 101.633-53.839 102.876-7.916 11.087-17.317 35.818-2.392 58.213 5.933 8.918 15.684 12.014 23.843 12.014 1.149 0 2.28-0.056 3.355-0.186l105.489-0.037c2.818 0.222 69.245 6.173 68.133 60.364-0.519 25.399-15.369 36.911-15.814 37.264l-15.388 11.346 14.109 13.015c0.519 0.463 12.384 11.717 10.846 37.005-1.779 28.865-21.377 41.213-21.562 41.306l-22.507 9.381 18.057 16.038c1.521 1.706 8.899 10.66 7.472 25.547-1.223 12.699-5.876 38.599-19.412 48.945l-17.668 6.748 12.347 10.53c3.152 9.418 3.69 31.777-6.748 46.46-6.082 8.547-16.5 12.811-31.851 12.996-17.594 0.242-58.882 0.316-106.138 0.316-85.541 0-190.659-0.26-210.534-0.316-9.771-4.133-19.634-9.233-22.859-11.828-2.651-4.747-9.788-22.025-36.115-22.025-0.649 0-1.298 0.019-1.984 0.037v-262.056c16.426-0.112 42.807-0.685 42.807-0.685l5.339-0.112 4.134-3.355c1.799-1.464 44.087-42.364 59.381-73.731 14.647-30.034 29.72-64.072 42.158-74.825 1.631-1.409 4.059-3.3 7.082-5.674 25.547-20.022 88.489-80.812 97.444-157.288 1.965-16.797 6.934-28.069 14.387-32.556 3.3-1.965 6.915-2.578 10.142-2.578M662.874 155.134c-9.881 0-19.337 2.54-27.309 7.342-16.87 10.197-27.049 29.459-30.312 57.268-6.953 59.438-56.619 112.757-84.874 134.911l-0.964 0.76c-3.097 2.428-5.618 4.431-7.361 5.951-14.758 12.755-26.401 35.689-43.809 71.933l-6.526 13.515c-9.195 18.855-34.354 46.312-46.626 58.621-8.88 0.166-24.323 0.464-35.281 0.537l-33.149 0.222v329.649l34.428-1.093c0.055 0 0.093 0 0.148 0 4.172 0 5.358 0.612 5.358 0.612 0.242 0.26 0.89 1.502 1.372 2.428l1.038 1.909 3.172 5.655 5.061 4.059c8.584 6.897 25.696 14.387 30.738 16.519l6.192 2.633 6.729 0.019c19.875 0.055 125.048 0.315 210.607 0.315 55.006 0 90.863-0.112 106.583-0.315 32.871-0.428 50.019-14.943 58.621-27.050 14.72-20.708 16.574-46.756 13.868-64.778 16.815-19.151 22.006-47.481 23.602-64.035 1.446-15.166-1.909-27.346-6.138-36.226 11.068-11.402 23.119-30.312 24.769-57.195 1.372-22.525-4.487-38.841-10.567-49.408 7.898-10.4 16.407-27.011 16.89-50.593 1.205-59.214-50.371-90.398-98.797-94.31l-1.353-0.112-107.769 0.037c-2.54-7.324 1.947-15.146 3.040-16.908 7.508-9.566 37.839-50.52 58.529-111.978 18.094-53.691-8.825-103.005-40.045-131.241l-6.044-5.468-7.88-2.058c-5.266-1.428-10.642-2.132-15.944-2.132v0z"></path>
            </svg>
            <span className="font-semibold">
              {' '}
              {/* Likes count font size adjusted by parent */}
              {post.likes > 999
                ? `${(post.likes / 1000).toFixed(1)}k`
                : post.likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      {post.imageUrl ? (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-40 sm:h-48 md:h-56 lg:h-60 xl:h-[230px] object-cover rounded-t-xl" // Adjusted image height
        />
      ) : (
        <div className="w-full h-40 sm:h-48 md:h-56 bg-slate-100 flex items-center justify-center text-gray-500 text-sm sm:text-base p-3 text-center rounded-t-xl">
          图片占位: {post.title}
        </div>
      )}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-text-primary mb-2 sm:mb-3 leading-snug hover:text-brand-purple transition-colors">
          {' '}
          {/* Adjusted title size & margin */}
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <div className="flex justify-between items-center text-xs sm:text-sm md:text-base text-gray-500 mt-auto pt-2 sm:pt-3 border-t border-gray-200">
          {' '}
          {/* Adjusted date/likes text size */}
          <span className="font-semibold">
            {' '}
            {/* Date font size adjusted by parent */}
            {post.date}
          </span>
          <div className="flex items-center">
            <svg
              className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-1.5 text-gray-400" // Adjusted icon size
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M346.313 508.885c1.836 0 3.319 1.484 3.319 3.319v319.434c0 1.835-1.483 3.318-3.319 3.318h-164.778c-1.836 0-3.319-1.483-3.319-3.318v-319.434c0-1.836 1.483-3.318 3.319-3.318h164.778M346.313 475.514h-164.778c-20.228 0-36.689 16.462-36.689 36.69v319.434c0 20.228 16.462 36.689 36.689 36.689h164.778c20.227 0 36.69-16.463 36.69-36.689v-319.434c0-20.227-16.462-36.69-36.69-36.69v0z"></path>
              <path d="M662.874 188.505c3.078 0 5.784 0.556 7.49 1.001 9.196 8.325 47.387 46.664 30.794 95.849-21.080 62.572-52.856 101.633-53.839 102.876-7.916 11.087-17.317 35.818-2.392 58.213 5.933 8.918 15.684 12.014 23.843 12.014 1.149 0 2.28-0.056 3.355-0.186l105.489-0.037c2.818 0.222 69.245 6.173 68.133 60.364-0.519 25.399-15.369 36.911-15.814 37.264l-15.388 11.346 14.109 13.015c0.519 0.463 12.384 11.717 10.846 37.005-1.779 28.865-21.377 41.213-21.562 41.306l-22.507 9.381 18.057 16.038c1.521 1.706 8.899 10.66 7.472 25.547-1.223 12.699-5.876 38.599-19.412 48.945l-17.668 6.748 12.347 10.53c3.152 9.418 3.69 31.777-6.748 46.46-6.082 8.547-16.5 12.811-31.851 12.996-17.594 0.242-58.882 0.316-106.138 0.316-85.541 0-190.659-0.26-210.534-0.316-9.771-4.133-19.634-9.233-22.859-11.828-2.651-4.747-9.788-22.025-36.115-22.025-0.649 0-1.298 0.019-1.984 0.037v-262.056c16.426-0.112 42.807-0.685 42.807-0.685l5.339-0.112 4.134-3.355c1.799-1.464 44.087-42.364 59.381-73.731 14.647-30.034 29.72-64.072 42.158-74.825 1.631-1.409 4.059-3.3 7.082-5.674 25.547-20.022 88.489-80.812 97.444-157.288 1.965-16.797 6.934-28.069 14.387-32.556 3.3-1.965 6.915-2.578 10.142-2.578M662.874 155.134c-9.881 0-19.337 2.54-27.309 7.342-16.87 10.197-27.049 29.459-30.312 57.268-6.953 59.438-56.619 112.757-84.874 134.911l-0.964 0.76c-3.097 2.428-5.618 4.431-7.361 5.951-14.758 12.755-26.401 35.689-43.809 71.933l-6.526 13.515c-9.195 18.855-34.354 46.312-46.626 58.621-8.88 0.166-24.323 0.464-35.281 0.537l-33.149 0.222v329.649l34.428-1.093c0.055 0 0.093 0 0.148 0 4.172 0 5.358 0.612 5.358 0.612 0.242 0.26 0.89 1.502 1.372 2.428l1.038 1.909 3.172 5.655 5.061 4.059c8.584 6.897 25.696 14.387 30.738 16.519l6.192 2.633 6.729 0.019c19.875 0.055 125.048 0.315 210.607 0.315 55.006 0 90.863-0.112 106.583-0.315 32.871-0.428 50.019-14.943 58.621-27.050 14.72-20.708 16.574-46.756 13.868-64.778 16.815-19.151 22.006-47.481 23.602-64.035 1.446-15.166-1.909-27.346-6.138-36.226 11.068-11.402 23.119-30.312 24.769-57.195 1.372-22.525-4.487-38.841-10.567-49.408 7.898-10.4 16.407-27.011 16.89-50.593 1.205-59.214-50.371-90.398-98.797-94.31l-1.353-0.112-107.769 0.037c-2.54-7.324 1.947-15.146 3.040-16.908 7.508-9.566 37.839-50.52 58.529-111.978 18.094-53.691-8.825-103.005-40.045-131.241l-6.044-5.468-7.88-2.058c-5.266-1.428-10.642-2.132-15.944-2.132v0z"></path>
            </svg>
            <span className="font-semibold">
              {' '}
              {/* Likes count font size adjusted by parent */}
              {post.likes > 999
                ? `${(post.likes / 1000).toFixed(1)}k`
                : post.likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogPage: React.FC = () => {
  const featuredPost = mockBlogPosts.find((post) => post.isFeatured);
  const otherPosts = mockBlogPosts.filter((post) => !post.isFeatured);

  return (
    <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12">
      {' '}
      {/* Adjusted page padding */}
      <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {featuredPost && <FeaturedBlogPostCard post={featuredPost} />}

        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {' '}
            {/* Adjusted gap */}
            {otherPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
