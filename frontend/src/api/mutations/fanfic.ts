import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createFanfic,
    createFanficChapter,
    createFanficComment,
    deleteFanfic,
    deleteFanficChapter,
    deleteFanficComment,
    deleteFanficCover,
    favouriteFanfic,
    likeFanficComment,
    unfavouriteFanfic,
    unlikeFanficComment,
    updateFanfic,
    updateFanficChapter,
    updateFanficComment,
    uploadFanficCommentMedia,
    uploadFanficCover,
} from "../endpoints";
import { queryKeys } from "../queryKeys";

export function useCreateFanfic() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: Parameters<typeof createFanfic>[0]) => createFanfic(data),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUpdateFanfic(id: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: Parameters<typeof updateFanfic>[1]) => updateFanfic(id, data),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useDeleteFanfic() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteFanfic(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUploadFanficCover(id: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (file: File) => uploadFanficCover(id, file),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUploadFanficCoverFor() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ id, file }: { id: string; file: File }) => uploadFanficCover(id, file),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useDeleteFanficCover(id: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: () => deleteFanficCover(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useCreateFanficChapter(fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ title, body }: { title: string; body: string }) => createFanficChapter(fanficId, title, body),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUpdateFanficChapter(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ chapterId, title, body }: { chapterId: string; title: string; body: string }) =>
            updateFanficChapter(chapterId, title, body),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useDeleteFanficChapter(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (chapterId: string) => deleteFanficChapter(chapterId),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useFavouriteFanfic() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => favouriteFanfic(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUnfavouriteFanfic() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => unfavouriteFanfic(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useCreateFanficComment(fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ body, parentId }: { body: string; parentId?: string }) =>
            createFanficComment(fanficId, body, parentId),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUpdateFanficComment(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ id, body }: { id: string; body: string }) => updateFanficComment(id, body),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useDeleteFanficComment(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteFanficComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useLikeFanficComment(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => likeFanficComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUnlikeFanficComment(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => unlikeFanficComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}

export function useUploadFanficCommentMedia(_fanficId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, file }: { commentId: string; file: File }) =>
            uploadFanficCommentMedia(commentId, file),
        onSuccess: () => qc.invalidateQueries({ queryKey: queryKeys.fanfic.all }),
    });
}
