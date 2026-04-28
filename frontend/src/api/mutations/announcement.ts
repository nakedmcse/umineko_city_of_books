import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createAnnouncementComment,
    deleteAnnouncementComment,
    likeAnnouncementComment,
    unlikeAnnouncementComment,
    updateAnnouncementComment,
    uploadAnnouncementCommentMedia,
} from "../endpoints";

export function useCreateAnnouncementComment(announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ body, parentId }: { body: string; parentId?: string }) =>
            createAnnouncementComment(announcementId, body, parentId),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}

export function useUpdateAnnouncementComment(_announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ id, body }: { id: string; body: string }) => updateAnnouncementComment(id, body),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}

export function useDeleteAnnouncementComment(_announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteAnnouncementComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}

export function useLikeAnnouncementComment(_announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => likeAnnouncementComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}

export function useUnlikeAnnouncementComment(_announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => unlikeAnnouncementComment(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}

export function useUploadAnnouncementCommentMedia(_announcementId: string) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, file }: { commentId: string; file: File }) =>
            uploadAnnouncementCommentMedia(commentId, file),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
    });
}
