import React from "react";
import { CardContainer } from "..";

type Props = {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  plaintext?: string;
  link?: {
    url: string;
    text: string;
  };
  children?: React.ReactNode;
};

const ContentCard = ({
  header,
  footer,
  title,
  subtitle,
  plaintext,
  link,
  children,
}: Props) => {
  return (
    <CardContainer>
      {header && (
        <div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{header}</p>
        </div>
      )}

      <div className="flex flex-col p-4 md:p-5">
        {title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
        {subtitle && (
          <p className="mt-1 text-xs font-medium uppercase text-gray-500">
            {subtitle}
          </p>
        )}
        {plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
        {children}
        {link && (
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700"
            href={link.url}
          >
            {link.text}
          </a>
        )}
      </div>
      {footer && (
        <div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{footer}</p>
        </div>
      )}
    </CardContainer>
  );
};

export default ContentCard;
