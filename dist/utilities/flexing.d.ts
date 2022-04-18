declare function flexing(input: string): ({
    exp: string;
    closeGroup?: boolean | undefined;
    openGroup?: boolean | undefined;
} | null)[];
export default flexing;
