// Nghệ sĩ
export interface Artist {
    id: string;
    name: string;
    imageUrl?: string;
    type: 'artist';
}

// Bài hát
export interface Song {
    id: string;
    title: string;
    artistName: string;
    albumArtUrl?: string;
    type: 'song';
}

export type RecentItem = Artist | Song;

export const saveRecentItem = (item: RecentItem): void => {
    const existing: RecentItem[] = JSON.parse(localStorage.getItem('recentItems') || '[]');

    // Xóa item trùng (cùng id và cùng type)
    const filtered = existing.filter(
        (i) => !(i.id === item.id && i.type === item.type)
    );

    // Thêm item mới vào đầu, giới hạn 10 phần tử
    const updated = [item, ...filtered].slice(0, 7);

    localStorage.setItem('recentItems', JSON.stringify(updated));
};


export const getRecentItems = (): RecentItem[] => {
    return JSON.parse(localStorage.getItem('recentItems') || '[]');
};