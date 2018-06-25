import ContributionController from '../controllers/contributionController';
import PromiseRouter from 'express-promise-router';
import passport from '../passport';
import { validateParam, validateBody } from '../helpers/validations';
import { schemas } from '../helpers/contributionValidationSchemas';


const router = PromiseRouter();
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
  .get(
    ContributionController.list
  )

router.route('/:id')
.get(
  validateParam(schemas.idSchema, 'id'),
  ContributionController.retrieve
)

router.route('/')
  .post(
    validateBody(schemas.contributionCreateUpdateSchema),
    passportJWT,
    ContributionController.create
  )

router.route('/:id')
  .put(
    validateBody(schemas.contributionCreateUpdateSchema),
    passportJWT,
    ContributionController.update
  )

router.route('/:id')
  .delete(
    validateParam(schemas.idSchema, 'id'),
    passportJWT,
    ContributionController.delete
  )


export default router;
