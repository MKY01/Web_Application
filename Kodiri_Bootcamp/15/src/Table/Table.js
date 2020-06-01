import React from "react";
import Rows from "./Rows/Rows";

export default function Table() {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows />
                    <Rows />
                </tbody>
            </table>
        </div>
    );
}
