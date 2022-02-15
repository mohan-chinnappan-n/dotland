/** @jsx h */
import { ComponentChildren, h } from "../deps.ts";

export function ErrorMessage(props: {
  title: string;
  children: ComponentChildren;
}) {
  return (
    <div class="rounded-md bg-red-50 border border-red-200 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm leading-5 font-medium text-red-800">
            {props.title}
          </h3>
          <div class="mt-2 text-sm leading-5 text-red-700">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
