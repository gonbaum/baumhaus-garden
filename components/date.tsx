import React from "react";
import { parseISO, format } from "date-fns";

/**
 *
 * @param {string} Date string
 * @return {string} Date string formatted
 */
export default function Date({ dateString }: any) {
  const date = parseISO(dateString);
  // TODO: Support other date format inputs
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
