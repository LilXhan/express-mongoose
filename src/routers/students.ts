import { Router } from 'express';
import StudentController from '../controllers/student';

const router = Router();
const studentController = new StudentController();

router.get('', studentController.findAll);
router.post('', studentController.store);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export { router };