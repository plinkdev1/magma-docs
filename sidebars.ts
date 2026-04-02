import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    { type: 'doc', id: 'introduction', label: 'Introduction' },
    { type: 'doc', id: 'quickstart', label: 'Quickstart Guide' },
    {
      type: 'category', label: 'Core Protocol', collapsed: false,
      items: ['capital-efficiency-problem','ybncm','conviction-score','discovery-multiplier','echo-pool'],
    },
    {
      type: 'category', label: 'Oracle System', collapsed: false,
      items: ['oracle-architecture','narrative-categories'],
    },
    {
      type: 'category', label: 'Token & Economics', collapsed: false,
      items: ['token-economics','seeker-skr','competitive-positioning'],
    },
    {
      type: 'category', label: 'NFT Collections', collapsed: false,
      items: ['nft-collections','waitlist'],
    },
    {
      type: 'category', label: 'Technical', collapsed: true,
      items: ['technical-architecture','roadmap','security'],
    },
    {
      type: 'category', label: 'API Reference', collapsed: false,
      items: ['api-reference', 'api-agents', 'api-tiers'],
    },
    {
      type: 'category', label: 'Brand & Assets', collapsed: false,
      items: ['brand-assets'],
    },
    {
      type: 'category', label: 'Legal', collapsed: true,
      items: ['legal'],
    },
    {
      type: 'category', label: 'Appendices', collapsed: true,
      items: ['appendix-a','appendix-b'],
    },
  ],
};

export default sidebars;
