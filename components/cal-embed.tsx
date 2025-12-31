"use client";

import Cal from "@calcom/embed-react";

export default function CalEmbed() {
  return (
    <Cal
      calLink="keyonsolutions/kick-off-meeting"
      config={{ layout: "month_view" }}
      embedJsUrl="https://app.cal.eu/embed/embed.js"
      namespace="kick-off-meeting"
    />
  );
}
