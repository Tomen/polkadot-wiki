module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      items: [
        "general/getting-started",
        "general/claims",
        "general/redenomination",
        "general/grants",
        "general/ambassadors",
        "general/research",
        "general/community",
        "general/contributing",
        "general/contributors",
        "general/glossary",
        "general/ens",
        "general/ledger",
        "general/scams",
        "general/how-to-dyor",
        "general/doc-thousand-validators",
        "general/faq",
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        "learn/learn-launch",
        {
          type: "category",
          label: "Basics",
          items: [
            "learn/learn-architecture",
            "learn/learn-accounts",
            "learn/learn-account-generation",
            "learn/learn-account-restore",
            "learn/learn-polkadotjs",
            "learn/learn-assets",
            "learn/learn-nft",
            "learn/learn-DOT",
            "learn/learn-security",
            "learn/learn-consensus",
            "learn/learn-nominator",
            "learn/learn-validator",
            "learn/learn-collator",
            "learn/learn-governance",
            "learn/learn-identity",
            "learn/learn-balance-transfers",
            "learn/learn-transaction-fees",
            "learn/learn-polkadot-host",
            "learn/learn-treasury",
            "learn/learn-registrar",
            "learn/learn-runtime-upgrades",
          ],
        },
        {
          type: "category",
          label: "Paraobjects",
          items: [
            {
              type: "category",
              label: "Parachains",
              items: [
                "learn/learn-parachains",
                "learn/learn-common-goods",
                "learn/learn-auction",
                "learn/learn-crowdloans",
                "learn/learn-teleport",
              ],  
            },
            "learn/learn-parathreads",
            "learn/learn-bridges",
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            "learn/learn-staking",
            "learn/learn-proxies",
            "learn/learn-availability",
            "learn/learn-randomness",
            "learn/learn-cross-consensus",
            "learn/learn-spree",
            "learn/learn-wasm",
            "learn/learn-phragmen",
            "learn/learn-simple-payouts",
          ],
        },
        {
          type: "category",
          label: "Cryptography",
          items: ["learn/learn-cryptography", "learn/learn-keys"],
        },
        {
          type: "category",
          label: "Polkadot Comparisons",
          items: [
            "learn/learn-kusama-vs-polkadot",
            "learn/learn-comparisons-ethereum-2",
            "learn/learn-comparisons-cosmos",
            "learn/learn-comparisons",
          ],
        },
        "learn/learn-video-tutorials",
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-wallets",
            "build/build-substrate",
            "build/build-ss58-registry",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build/build-integration",
            "build/build-protocol-info",
            "build/build-integrate-assets",
            "build/build-node-management",
            "build/build-node-interaction",
            "build/build-transaction-construction",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build/build-tools-index"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      items: [
        "maintain/maintain-index",
        "maintain/maintain-polkadot-parameters",
        "maintain/maintain-endpoints",
        {
          type: "category",
          label: "Nodes and Dapps",
          items: [
            "maintain/maintain-sync",
            "maintain/maintain-networks",
            "maintain/maintain-wss",
            "maintain/maintain-errors",
          ],
        },
        {
          type: "category",
          label: "Nominator Guides",
          items: [
            "maintain/maintain-guides-how-to-nominate-polkadot",
            "maintain/maintain-guides-how-to-unbond",
          ],
        },
        {
          type: "category",
          label: "Validator Guides",
          items: [
            "maintain/maintain-guides-how-to-validate-polkadot",
            "maintain/maintain-guides-validator-payout",
            "maintain/maintain-guides-how-to-systemd",
            "maintain/maintain-guides-secure-validator",
            "maintain/maintain-guides-how-to-use-polkadot-validator-setup",
            "maintain/maintain-guides-how-to-setup-a-validator-with-reverse-proxy",
            "maintain/maintain-guides-how-to-upgrade",
            "maintain/maintain-guides-how-to-monitor-your-node",
            "maintain/maintain-guides-how-to-chill",
            "maintain/maintain-guides-how-to-stop-validating",
            "maintain/doc-maintain-guides-validator-community",
          ],
        },
        {
          type: "category",
          label: "Governance Guides",
          items: [
            "maintain/maintain-guides-democracy",
            "maintain/maintain-guides-how-to-join-council",
            "maintain/maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};