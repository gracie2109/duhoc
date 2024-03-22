'use client';

import {social} from "@/config/constant";
import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    StrictMode,
} from "react";












export function SocialTable () {
    return (


        <table className="table-fixed border w-full">
            <tbody>

            <tr>
                <td className="p-1">Name:</td>
            </tr>

            <tr>
                <td className="border p-1">Age: </td>
            </tr>

            <tr className="border font-semibold p-2 text-justify">
                <td className="p-2">
                    .address
                </td>
            </tr>

            </tbody>
        </table>
    )
}