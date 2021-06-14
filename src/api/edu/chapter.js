import request from '@/utils/request'
export default{
    getAllChapterVideo(courseId){
        return request({
            url: '/eduservice/chapter/getChapterVideo/'+courseId,
            method: 'get'
        })
    },
    //添加章节
    addChapter(chapter){
        return request({
            url: '/eduservice/chapter/addChapter',
            method: 'post',
            data: chapter
        })
    },
    getChapter(chapterId){
        return request({
            url: '/eduservice/chapter/getChapterInfo/'+chapterId,
            method: 'get'
        })
    },
    updateChapter(chapter){
        return request({
            url: '/eduservice/chapter/updateChapter',
            method: 'post',
            data: chapter
        })
    },
    deleteChapter(chapterId){
        return request({
            url: '/eduservice/chapter/'+chapterId,
            method: 'delete'
        })
    },
}