import type { PropsWithChildren, ReactNode } from "react";


// 🧠 1. children এর type কি হবে? -> ReactNode
type PanelProps = {
  title: string;
  children?: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children ?? <em>No Children present</em>}</div>
    </section>
  );
}


// 🧠 1. children এর type কি হবে? -> ReactNode
// PropsWithChildren -> 👉 এটা দিলে children required হয়। এখন children না দিলে TypeScript error দিবে।
interface RequiredChildrenProps extends PropsWithChildren {
  title: string;
  children: ReactNode;  
}

export function RequiredChildrenPanel({
  title,
  children,
}: RequiredChildrenProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
