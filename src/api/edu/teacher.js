import request from '@/utils/request'

export default{
    //1.讲师列表（条件分页查询）
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url: '/table/list/'+current+"/"+limit,
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转化为json进行传递到接口
            data: teacherQuery
          })
    },
    //删除讲师
    deleteTeacherId(id){
        return request({
            //url: '/table/list/'+current+"/"+limit,
            url: `/eduservice/teacher/${id}`,
            method: 'delete',
          })
    },
        //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
            })
    },
        //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
            })
    },
        //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
            })
    }
}
