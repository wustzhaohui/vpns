

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PopularAppsSection from '@/components/home/PopularAppsSection';
import AnimatedFeatureSection, { FeatureSectionProps } from '@/components/home/AnimatedFeatureSection';
import UserReviewsSection from '@/components/home/UserReviewsSection';
import FreeTrialSection from '@/components/home/FreeTrialSection';

const featureSectionsData: Omit<FeatureSectionProps, 'imagePosition'>[] = [
  {
    badgeText: '火爆卖点',
    title: '一键“快连”，纵享丝滑',
    description: '快连 VPN 采用全新内核，AI 智能连接，自动为您匹配全球最快的网络节点，只需要轻点“开启快连”，3秒之内，纵享丝绸般顺滑的冲浪体验。',
    imageUrl: '/assets/home_introduce_01.png',
    imageAlt: '一键快连功能图示',
  },
  {
    badgeText: '火爆卖点',
    title: '天涯海角，无不可达',
    description: '快连 VPN 支持全球网络资源，无限制无记录的访问任何资源，同时使用最先进的技术帮助您抹除任何痕迹，真正实现天涯海角随处达。',
    imageUrl: '/assets/home_introduce_02.png',
    imageAlt: '全球节点图示',
  },
  {
    badgeText: '火爆卖点',
    title: '行业领先，安全无忧',
    description: '快连 VPN 于 AppStore 工具类排行长期领先，并获得 Google 独立安全审核，以及 App Esteem 国际网络安全认证，带来网络自由的同时，不储存任何个人资讯，坚守对您隐私的绝对保护。',
    imageUrl: '/assets/home_introduce_03.png',
    imageAlt: '安全认证图示',
  },
  {
    badgeText: '火爆卖点',
    title: '随用随享，永不套牢',
    description: '全球唯一一家敢提供短期会员的知名 VPN，安全稳定的同时致力于保障用户权益，随时想用，随时订购，永远不用担心跑路，永远不用担心被套牢。',
    imageUrl: '/assets/home_introduce_04.png',
    imageAlt: '灵活订阅图示',
  },
  {
    badgeText: '火爆卖点',
    title: '不限平台，无缝衔接',
    description: '快连 VPN 支持市面上所有主流的设备，只需一个账号即可在多个设备中共享会员，支持多设备同时在线，保障您不同使用场景下的无缝衔接。',
    imageUrl: '/assets/home_introduce_05.png',
    imageAlt: '多平台支持图示',
  },
  {
    badgeText: '火爆卖点',
    title: '真人客服，永不失联',
    description: '快连 VPN 提供 24 小时在线服务，100+ 真人客服与网络工程师随时待命，为您上网体验保驾护航，真真正正的提供随叫随到，永不失联的 VIP 服务。',
    imageUrl: '/assets/home_introduce_06.png',
    imageAlt: '客户服务图示',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="text-brand-text-primary overflow-x-hidden bg-[#F8FAFF]">
      <HeroSection />
      <PopularAppsSection />

      {featureSectionsData.map((feature, index) => (
        <AnimatedFeatureSection
          key={index}
          badgeText={feature.badgeText}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
          imagePosition={index % 2 === 0 ? 'right' : 'left'} // Alternating image position
        />
      ))}

      <UserReviewsSection />
      <FreeTrialSection />
    </div>
  );
};

export default HomePage;
