import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

interface PackageManagerCommandProps {
  commands: string[];
  execute?: boolean;
}

export default function PackageManagerCommand({ commands, execute = false }: PackageManagerCommandProps) {
  return (
    <Tabs>
      {['npm', 'yarn', 'pnpm'].map((packageManager) => (
        <TabItem
          key={packageManager}
          value={packageManager}
          label={packageManager}
        >
          <CodeBlock
            language='bash'
            title={`${packageManager} command`}
          >
            {commands
              .map(
                (command) =>
                  `${
                    execute
                      ? `${packageManager === 'pnpm' ? 'pnpx' : 'npx'} ${command}`
                      : `${packageManager} ${command}`
                  }`
              )
              .map((command) => (packageManager === 'npm' ? command.replace('add', 'install') : command))
              .join('\n')}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
