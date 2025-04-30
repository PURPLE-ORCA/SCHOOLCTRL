// resources/js/types/global.d.ts
import { type Config, type RouteFunction } from 'ziggy-js'; // Import types from ziggy

declare global {
    // Declare the global 'route' function provided by Ziggy's @routes directive
    function route(name?: string, params?: any, absolute?: boolean, config?: Config): string;
    var route: RouteFunction; // Alternative declaration using the imported type

    // Optional: Declare the global Ziggy config object if you need to access it directly
    // interface Window {
    //   Ziggy: Config;
    // }
}

// Add this empty export to treat the file as a module.
export {};
