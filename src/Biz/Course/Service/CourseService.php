<?php

namespace Biz\Course\Service;

use Codeages\Biz\Framework\Service\Exception\AccessDeniedException;

interface CourseService
{
    public function getCourse($id);

    public function findCoursesByIds($ids);

    public function findCoursesByCourseSetIds(array $setIds);

    public function findCoursesByParentIdAndLocked($parentId, $locked);

    public function findPublishedCoursesByCourseSetId($courseSetId);

    public function findCoursesByCourseSetId($courseSetId);

    public function getDefaultCourseByCourseSetId($courseSetId);

    public function getDefaultCoursesByCourseSetIds($courseSetIds);

    public function getFirstPublishedCourseByCourseSetId($courseSetId);

    public function getFirstCourseByCourseSetId($courseSetId);

    public function createCourse($course);

    /**
     * 复制教学计划.
     *
     * @param array $fields
     *
     * @return mixed
     */
    public function copyCourse($fields);

    public function createChapter($chapter);

    public function updateChapter($courseId, $chapterId, $fields);

    public function updateCourse($id, $fields);

    public function updateCourseMarketing($id, $fields);

    public function updateCourseStatistics($id, $fields);

    public function deleteCourse($id);

    public function closeCourse($id);

    public function publishCourse($id);

    /**
     * @param $courseId
     * @param int $limitNum 限制取几条任务，默认不限制
     *
     * @return mixed
     */
    public function findCourseItems($courseId, $limitNum = 0);

    public function tryManageCourse($courseId, $courseSetId = 0);

    public function getNextNumberAndParentId($courseId);

    public function getNextCourseItemSeq($courseId);

    public function tryTakeCourse($courseId);

    public function canTakeCourse($course);

    public function findStudentsByCourseId($courseId);

    public function findTeachersByCourseId($courseId);

    public function countStudentsByCourseId($courseId);

    public function getUserRoleInCourse($courseId, $userId);

    public function findPriceIntervalByCourseSetIds($courseSetIds);

    /**
     * 获取用户在教的教学计划.
     *
     * @param int  $courseSetId
     * @param bool $onlyPublished
     *
     * @throws AccessDeniedException
     *
     * @return mixed
     */
    public function findUserTeachingCoursesByCourseSetId($courseSetId, $onlyPublished = true);

    /**
     * @param int  $userId
     * @param bool $onlyPublished 是否只需要发布后的教学计划
     *
     * @return array[]
     */
    public function findTeachingCoursesByUserId($userId, $onlyPublished = true);

    /**
     * @param int $userId
     *
     * @return array[]
     */
    public function findLearnCoursesByUserId($userId);

    public function findUserTeachCourseCount($conditions, $onlyPublished = true);

    public function findUserTeachCourses($conditions, $start, $limit, $onlyPublished = true);

    /**
     * @param array $ids
     *
     * @return array[]
     */
    public function findPublicCoursesByIds(array $ids);

    public function countUserLearningCourses($userId, $filters = array());

    /**
     * filter 支持 type classroomId locked ...
     *
     * @param $userId
     * @param $start
     * @param $limit
     * @param array $filters
     *
     * @return mixed
     */
    public function findUserLearningCourses($userId, $start, $limit, $filters = array());

    public function countUserLearnedCourses($userId, $filters = array());

    public function findUserLearnedCourses($userId, $start, $limit, $filters = array());

    public function findLearnedCoursesByCourseIdAndUserId($courseId, $userId);

    public function findUserLearnCourses($userId, $start, $limit);

    public function countUserLearnCourse($userId);

    public function searchCourses($conditions, $sort, $start, $limit);

    public function searchCourseCount($conditions);

    public function sortCourseItems($courseId, $ids);

    public function deleteChapter($courseId, $chapterId);

    public function analysisCourseDataByTime($startTime, $endTime);

    public function countCourses(array $conditions);

    public function getMinAndMaxPublishedCoursePriceByCourseSetId($CourseSetId);

    public function updateMaxRateByCourseSetId($courseSetId, $maxRate);

    public function findCourseTasksAndChapters($courseId, $includeChapters);
}
