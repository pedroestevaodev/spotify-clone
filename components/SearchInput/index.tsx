'use client';

import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Input } from "../Input";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const debounceValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debounceValue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query,  
        });

        router.push(url);
    }, [debounceValue, router]);

    return (
        <Input 
            value={value}
            placeholder="Search for a song..."
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export { SearchInput };